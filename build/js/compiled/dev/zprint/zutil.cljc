(ns ^:no-doc zprint.zutil
  (:require
    #?@(:clj [[zprint.macros :refer [do-redef-vars]]])
    clojure.string
    zprint.zfns
    #?@(:clj [[zprint.redef]])
    [rewrite-clj.parser :as p]
    [rewrite-clj.node :as n]
    [rewrite-clj.zip :as z]
    #?@(:cljs [[rewrite-clj.zip.base :as zb] [rewrite-clj.zip.whitespace :as zw]
               [rewrite-clj.zip.move :as zm] [rewrite-clj.zip.removez :as zr]
               [rewrite-clj.zip.editz :as ze] clojure.zip])))

;;
;; # Zipper oriented style printers
;;

;;
;; Note that both rewrite-clj and rewrite-cljs use the following namespaces:
;;
;; rewrite-clj.parse
;; rewrite-clj.node
;; rewrite-clj.zip
;;
;; and have many common routines.  So it is fine to use z/<fn> as long as
;; that <fn> shows up in both libraries.
;;

;;
;; ## clj and cljs compatibility routines
;;
;; ### Routines missing in :cljs since it uses clojure.zip
;; 

(def down*
  #?(:clj z/down*
     :cljs clojure.zip/down))

(def up*
  #?(:clj z/up*
     :cljs clojure.zip/up))

(def right*
  #?(:clj z/right*
     :cljs clojure.zip/right))

(def left*
  #?(:clj z/left*
     :cljs clojure.zip/left))

(def next*
  #?(:clj z/next*
     :cljs clojure.zip/next))

(def prev*
  #?(:clj z/prev*
     :cljs clojure.zip/prev))

(def replace*
  #?(:clj z/replace*
     :cljs clojure.zip/replace))

(def insert-right*
  #?(:clj z/insert-right*
     :cljs clojure.zip/insert-right))

;;
;; ### Routines with different namespaces
;;

(def edn*
  #?(:clj z/edn*
     :cljs zb/edn*))

(def sexpr
  #?(:clj z/sexpr
     :cljs zb/sexpr))

(def string
  #?(:clj z/string
     :cljs zb/string))

(def tag
  #?(:clj z/tag
     :cljs zb/tag))

(def skip
  #?(:clj z/skip
     :cljs zw/skip))

(defn whitespace?
  [zloc]
  (or (= (tag zloc) :whitespace) (= (tag zloc) :newline) (= (tag zloc) :comma)))

; indent-only
(defn skip-whitespace
  ([zloc] (skip-whitespace z/right zloc))
  ([f zloc] (skip f whitespace? zloc)))

(defn whitespace-not-newline?
  [zloc]
  (or (= (tag zloc) :whitespace) (= (tag zloc) :comma)))

(def whitespace-or-comment?
  #?(:clj z/whitespace-or-comment?
     :cljs zw/whitespace-or-comment?))

(def length
  #?(:clj z/length
     :cljs zb/length))

(def rightmost?
  #?(:clj z/rightmost?
     :cljs zm/rightmost?))

(def leftmost?
  #?(:clj z/leftmost?
     :cljs zm/leftmost?))

; conflicts with clojure.core:

(def zremove
  #?(:clj z/remove
     :cljs zr/remove))

(def zreplace
  #?(:clj z/replace
     :cljs ze/replace))

;;
;; Check to see if we are at the focus by checking the
;; path.
;;

(declare find-root-and-path)

(defn zfocus
  "Is the zipper zloc equivalent to the path floc.  In this
  case, floc isn't a zipper, but was turned into a path early on."
  [zloc floc]
  (let [[_ zpath] (find-root-and-path zloc)] (= zpath floc)))

(defn zfocus-style
  "Take the various inputs and come up with a style."
  [style zloc floc]
  (let [style (if (= style :f) style (if (zfocus zloc floc) :f :b))] style))

(defn z-coll? "Is the zloc a collection?" [zloc] (z/seq? zloc))

(defn zuneval? "Is this a #_(...)" [zloc] (= (tag zloc) :uneval))

(defn zmeta? "Is this a ^{...}" [zloc] (= (tag zloc) :meta))

(defn zquote?
  "Is this a '(...) or '[ ... ] or some other quote?"
  [zloc]
  (= (tag zloc) :quote))

(defn zreader-macro? "Is this a @..." [zloc] (= (tag zloc) :reader-macro))

(defn ztag "Return the tag for this zloc" [zloc] (tag zloc))

(defn znamespacedmap?
  "Is this a namespaced map?"
  [zloc]
  #?(:clj (= (tag zloc) :namespaced-map)
     :cljs (or (= (tag zloc) :namespaced-map)
               (re-find #"^#:" (z/string zloc)))))

(defn zcomment?
  "Returns true if this is a comment."
  [zloc]
  (when zloc (= (tag zloc) :comment)))

(defn znewline?
  "Returns true if this is a newline."
  [zloc]
  (when zloc (= (tag zloc) :newline)))

(defn znumstr
  "Does z/string, but takes an additional argument for hex conversion.
  Hex conversion is not implemented for zippers, though, because at present
  it is only used for byte-arrays, which don't really show up here."
  [zloc _ _]
  (string zloc))

(defn zstart "Find the zloc inside of this zloc." [zloc] (down* zloc))

(defn zfirst
  "Find the first non-whitespace zloc inside of this zloc, or
  the first whitespace zloc that is the focus."
  [zloc]
  (let [nloc (down* zloc)] (if nloc (skip right* whitespace? nloc))))

(defn zfirst-no-comment
  "Find the first non-whitespace and non-comment zloc inside of this zloc."
  [zloc]
  (let [nloc (down* zloc)] (if nloc (skip right* whitespace-or-comment? nloc))))

(defn zsecond
  "Find the second non-whitespace zloc inside of this zloc."
  [zloc]
  (if-let [first-loc (zfirst zloc)]
    (if-let [nloc (right* first-loc)] (skip right* whitespace? nloc))))

(defn zsecond-no-comment
  "Find the second non-whitespace zloc inside of this zloc."
  [zloc]
  (if-let [first-loc (zfirst-no-comment zloc)]
    (if-let [nloc (right* first-loc)]
      (skip right* whitespace-or-comment? nloc))))

(defn zthird
  "Find the third non-whitespace zloc inside of this zloc."
  [zloc]
  (some->> (zfirst zloc)
           right*
           (skip right* whitespace?)
           right*
           (skip right* whitespace?)))

(defn zthird-no-comment
  "Find the third non-whitespace zloc inside of this zloc."
  [zloc]
  (some->> (zfirst-no-comment zloc)
           right*
           (skip right* whitespace-or-comment?)
           right*
           (skip right* whitespace-or-comment?)))

(defn zfourth
  "Find the fourth non-whitespace zloc inside of this zloc."
  [zloc]
  (some->> (zfirst zloc)
           right*
           (skip right* whitespace?)
           right*
           (skip right* whitespace?)
           right*
           (skip right* whitespace?)))

(defn zrightnws
  "Find the next non-whitespace zloc inside of this zloc. Returns nil
  if nothing left."
  [zloc]
  (if zloc (if-let [nloc (right* zloc)] (skip right* whitespace? nloc))))

(defn znextnws-w-nl
  "Find the next non-whitespace zloc inside of this zloc considering 
  newlines to not be whitespace. Returns nil if nothing left. Which is
  why this is nextnws and not rightnws, since it is exposed in zfns."
  [zloc]
  (if zloc
    (if-let [nloc (right* zloc)] (skip right* whitespace-not-newline? nloc))))

(defn zrightmost
  "Find the rightmost non-whitespace zloc at this level"
  [zloc]
  (loop [nloc (zrightnws zloc)
         ploc zloc]
    (if-not nloc ploc (recur (zrightnws nloc) nloc))))

(defn zleftnws
  "Find the next non-whitespace zloc inside of this zloc."
  [zloc]
  (if zloc (if-let [nloc (left* zloc)] (skip left* whitespace? nloc))))

(defn zleftmost
  "Find the leftmost non-whitespace zloc at this level"
  [zloc]
  (loop [nloc (zleftnws zloc)
         ploc zloc]
    (if-not nloc ploc (recur (zleftnws nloc) nloc))))

; This uses next*, not right*, and will step up out of a sequence.
#_(defn znextnws
    "Find the next non-whitespace zloc."
    [zloc]
    (if (z/end? zloc)
      zloc
      (if-let [nloc (next* zloc)] (skip next* whitespace? nloc))))

(defn zprevnws
  "Find the next non-whitespace zloc."
  [zloc]
  (if-let [ploc (prev* zloc)] (skip prev* whitespace? ploc)))

(defn znthnext
  "Find the nth non-whitespace zloc inside of this zloc."
  [zloc n]
  (loop [nloc (skip-whitespace (down* zloc))
         i ^long n]
    (if (or (nil? nloc) (= i 0)) nloc (recur (zrightnws nloc) (dec i)))))

(defn zfind
  "Find the locations (counting from zero, and only counting non-whitespace
  elements) of the first zthing?.  Return its index if it is found, nil if not."
  [zthing? zloc]
  (loop [nloc (skip-whitespace (down* zloc))
         i 0]
    (when (not (nil? nloc))
      (if (zthing? nloc) i (recur (zrightnws nloc) (inc i))))))

(defn znl [] "Return a zloc which is a newline." (edn* (p/parse-string "\n")))

(defn multi-nl
  "Return a sequence of zloc newlines."
  [n]
  (apply vector (repeat n (znl))))

(defn split-newline-from-comment
  "Given a zloc which is a comment, replace it with a zloc which is the
  same comment with no newline, and a newline that follows it.  This is
  done in the zipper so that later navigation in this area remains
  continues to work."
  [zloc]
  (let [comment-no-nl (p/parse-string
                        (clojure.string/replace-first (z/string zloc) "\n" ""))
        new-comment (replace* zloc comment-no-nl)
        new-comment (insert-right* new-comment (p/parse-string "\n"))]
    new-comment))

(defn zmap-w-bl
  "Return a vector containing the return of applying a function to
  every non-whitespace zloc inside of zloc, including two newlines
  for every blank line encountered.  Note that a truly blank line
  will show up as one zloc with two newlines in it.  It will have
  (= (z/tag nloc) :newline), but it will have both newlines.  To
  ease handling of these multi-line newlines, this routine will
  split them up into multiple individual newlines."
  [zfn zloc]
  (loop [nloc (down* zloc)
         blank? false
         previous-was-nl? false
         previous-comment? nil
         out []]
    (if-not nloc
      out
      (let [ws? (whitespace? nloc)
            nl? (= (z/tag nloc) :newline)
            nl-len (when nl? (length nloc))
            multi-nl? (when nl? (> (length nloc) 1))
            emit-nl? (or (and blank? nl?) multi-nl?)
            ; newline thing to emit
            nl-to-emit (when emit-nl?
                         (cond multi-nl? (mapv zfn
                                           (multi-nl (if (or previous-was-nl?
                                                             (not blank?))
                                                       nl-len
                                                       (inc nl-len))))
                               previous-was-nl? [(zfn nloc)]
                               :else [(zfn nloc) (zfn nloc)]))
            ; non newline thing to emit
            comment? (= (z/tag nloc) :comment)
            ; This may reset the nloc for the rest of the sequence!
            nloc (if comment? (split-newline-from-comment nloc) nloc)
            result (when (or (not ws?) (and nl? previous-comment?)) (zfn nloc))]
        #_(prn "map-w-bl: blank?" blank?
               ", zloc:" (z/string nloc)
               ", length:" (length nloc)
               ", ws?" ws?
               ", previous-was-nl??" previous-was-nl?
               ", previous-comment?" previous-comment?
               ", nl? " nl?
               ", nl-len:" nl-len
               ", multi-nl?" multi-nl?
               ", emit-nl?" emit-nl?
               ", nl-to-emit" (map z/string nl-to-emit))
        (recur (right* nloc)
               (if blank?
                 ; If already blank, then if it is whitespace it is still
                 ; blank.  That includes newlines (which are ws? too).
                 (or ws? nl?)
                 ; Not already blank, only a newline (of any length)
                 ; will start blank
                 nl?)
               ; If we emitted something, was it a nl?  If nothing emitted,
               ; no change.
               (if (or result nl-to-emit)
                 ; Two ways to emit a nl
                 (or (and nl? previous-comment?) emit-nl?)
                 previous-was-nl?)
               comment?
               (cond result (conj out result)
                     nl-to-emit (apply conj out nl-to-emit)
                     :else out))))))

(defn zmap-w-nl
  "Return a vector containing the return of applying a function to
  every non-whitespace zloc inside of zloc, including newlines.
  This will also split newlines into separate zlocs if they were
  multiple, and split the newline off the end of a comment. The
  comment split actually changes the zipper for the rest of the
  sequence, where the newline splits do not."
  [zfn zloc]
  (loop [nloc (down* zloc)
         out []]
    (if-not nloc
      out
      (let [; non-newline thing to emit
            nl? (= (z/tag nloc) :newline)
            comment? (= (z/tag nloc) :comment)
            ; This may reset the nloc for the rest of the sequence!
            nloc (if comment? (split-newline-from-comment nloc) nloc)
            result (when (not (whitespace? nloc)) (zfn nloc))
            nl-len (when nl? (length nloc))
            multi-nl? (when nl? (> (length nloc) 1))
            ; newline thing to emit
            nl-to-emit
              (when nl?
                (if multi-nl? (mapv zfn (multi-nl nl-len)) [(zfn nloc)]))]
        #_(println "zmap-w-nl: tag:" (z/tag nloc))
        (recur (right* nloc)
               (cond result (conj out result)
                     nl-to-emit (apply conj out nl-to-emit)
                     :else out))))))

(defn zmap-w-nl-comma
  "Return a vector containing the return of applying a function to
  every non-whitespace zloc inside of zloc, including newlines and commas.
  This will also split newlines into separate zlocs if they were
  multiple, and split the newline off the end of a comment."
  [zfn zloc]
  (loop [nloc (down* zloc)
         out []]
    (if-not nloc
      out
      (let [; non-newline thing to emit
            nl? (= (z/tag nloc) :newline)
            comma? #?(:clj (= (z/tag nloc) :comma)
                      :cljs (or (= (z/tag nloc) :comma)
                                (and (= (z/tag nloc) :whitespace)
                                     (clojure.string/includes? (z/string nloc)
                                                               ","))))
            comment? (= (z/tag nloc) :comment)
            ; This may reset the nloc for the rest of the sequence!
            nloc (if comment? (split-newline-from-comment nloc) nloc)
            result (when (or (not (whitespace? nloc)) comma?) (zfn nloc))
            nl-len (when nl? (length nloc))
            multi-nl? (when nl? (> (length nloc) 1))
            ; newline thing to emit
            nl-to-emit
              (when nl?
                (if multi-nl? (mapv zfn (multi-nl nl-len)) [(zfn nloc)]))]
        #_(prn "zmap-w-nl-comma: tag:" (z/tag nloc) (z/string nloc))
        (recur (right* nloc)
               (cond result (conj out result)
                     nl-to-emit (apply conj out nl-to-emit)
                     :else out))))))

(defn zmap
  "Return a vector containing the return of applying a function to 
  every non-whitespace zloc inside of zloc. The newline that shows
  up in every comment is also split out into a separate zloc."
  [zfn zloc]
  #_(prn "zmap: zloc" (z/string zloc))
  (loop [nloc (down* zloc)
         previous-comment? nil
         out []]
    (if-not nloc
      out
      (let [comment? (= (z/tag nloc) :comment)
            nl? (= (z/tag nloc) :newline)
            ; This may reset the nloc for the rest of the sequence!
            nloc (if comment? (split-newline-from-comment nloc) nloc)
            result (when (or (not (whitespace? nloc))
                             (and nl? previous-comment?))
                     (zfn nloc))]
        (recur (right* nloc) comment? (if result (conj out result) out))))))

; This was the original zmap before all of the changes...
(defn zmap-alt
  "Return a vector containing the return of applying a function to 
  every non-whitespace zloc inside of zloc."
  [zfn zloc]
  (loop [nloc (down* zloc)
         out []]
    (if-not nloc
      out
      (recur (right* nloc)
             (if-let [result (when (not (whitespace? nloc)) (zfn nloc))]
               (conj out result)
               out)))))

(defn zcount
  "Return the count of non-whitespace elements in zloc.  Comments are
  counted as one thing, commas are ignored as whitespace."
  [zloc]
  (loop [nloc (down* zloc)
         i 0]
    (if-not nloc
      i
      (recur (right* nloc) (if (not (whitespace? nloc)) (inc i) i)))))

; Used in core.cljc
(defn zmap-all
  "Return a vector containing the return of applying a function to 
  every zloc inside of zloc."
  [zfn zloc]
  (loop [nloc (down* zloc)
         out []]
    (if-not nloc out (recur (right* nloc) (conj out (zfn nloc))))))

(defn zseqnws
  "Return a seq of all of the non-whitespace children of zloc."
  [zloc]
  (zmap identity zloc))

(defn zseqnws-w-nl
  "Return a seq of all of the non-whitespace children of zloc, including
  newlines."
  [zloc]
  (zmap-w-nl identity zloc))

(defn zseqnws-w-bl
  "Return a seq of all of the non-whitespace children of zloc, including
  only newlines that start and end blank lines."
  [zloc]
  (zmap-w-bl identity zloc))

(defn zremove-right
  "Remove everything to the right of the current zloc. In other words,
  make the current zloc the rightmost."
  [zloc]
  (loop [nloc zloc]
    (if (rightmost? nloc) nloc (recur (zremove (right* nloc))))))

(defn ztake-append
  "Considering the current zloc a collection, move down into it and
  take n non-whitespace elements, dropping the rest.  Then append the
  given element to the end, coercing it into a node/zloc.  Note, this 
  is not quite implemented that way, as it uses replace."
  [n zloc end-struct]
  (loop [nloc (down* zloc)
         index 0]
    (if (>= index n)
      (up* (zremove-right (zreplace nloc end-struct)))
      (let [xloc (right* nloc)]
        (recur xloc (if (whitespace? xloc) index (inc index)))))))

(defn zcount-zloc-seq-nc-nws
  "How many non-whitespace non-comment children are in zloc-seq? Note
  that this is fundamentally different from zcount, in that it doesn't
  take a zloc, but rather a zloc-seq (i.e., a seq of elements, each of
  which is a zloc)."
  [zloc-seq]
  (reduce #(if (whitespace-or-comment? %2) %1 (inc %1)) 0 zloc-seq))

(defn find-root-and-path
  "Create a vector with the root as well as another vector
  which contains the number of right moves after each down
  down to find a particular zloc.  The right moves include
  both whitespace and comments."
  [zloc]
  (if zloc
    (loop [nloc zloc
           left 0
           out ()]
      (if-not (left* nloc)
        (if-not (up* nloc) [nloc out] (recur (up* nloc) 0 (cons left out)))
        (recur (left* nloc) (inc left) out)))))

(defn find-root-and-path-nw
  "Create a vector with the root as well as another vector
  which contains the number of right moves after each down
  down to find a particular zloc.  The right moves are
  non-whitespace, but include comments."
  [zloc]
  (if zloc
    (loop [nloc zloc
           left 0
           out ()]
      (if-not (left* nloc)
        (if-not (up* nloc) [nloc out] (recur (up* nloc) 0 (cons left out)))
        (recur (left* nloc) (if (whitespace? nloc) left (inc left)) out)))))

(defn find-root
  "Find the root from a zloc by doing lots of ups."
  [zloc]
  (loop [nloc zloc] (if-not (z/up nloc) nloc (recur (z/up nloc)))))

(defn move-down-and-right
  "Move one down and then right a certain number of steps."
  [zloc ^long right-count]
  (loop [nloc (down* zloc)
         remaining-right right-count]
    (if (zero? remaining-right)
      nloc
      (recur (right* nloc) (dec remaining-right)))))

(defn follow-path
  "Follow the path vector from the root and return the zloc
  at this location."
  [path-vec zloc]
  (reduce move-down-and-right zloc path-vec))

(defn zanonfn? "Is this an anonymous fn?" [zloc] (= (tag zloc) :fn))

(defn zlast
  "Return the last non-whitespace (but possibly comment) element inside
  of this zloc."
  [zloc]
  (let [nloc (down* zloc)] (when nloc (zrightmost nloc))))

(defn zsexpr?
  "Returns true if this can be converted to an sexpr. Works around a bug
  where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
  on something with n/tag :fn"
  [zloc]
  (and zloc (not= :fn (tag zloc)) (not (n/printable-only? (z/node zloc)))))

;
; This doesn't work, because there are situations where (zsexpr? zloc)
; will fail but it is still a keyword.
;
#_(defn zkeyword?-alt
    "Returns true if this is a keyword."
    [zloc]
    (and zloc (zsexpr? zloc) (keyword? (sexpr zloc))))

(defn zkeyword?
  "Returns true if this is a keyword."
  [zloc]
  (and zloc (clojure.string/starts-with? (z/string zloc) ":")))

(defn zsymbol?
  "Returns true if this is a symbol."
  [zloc]
  (and zloc (zsexpr? zloc) (symbol? (sexpr zloc))))

(defn znil?
  "Returns true if this is nil."
  [zloc]
  (and zloc (zsexpr? zloc) (nil? (z/sexpr zloc))))

(defn zreader-cond-w-symbol?
  "Returns true if this is a reader-conditional with a symbol in 
  the first position (could be :clj or :cljs, whatever)."
  [zloc]
  (let [result (when (zreader-macro? zloc)
                 (let [element (z/down zloc)]
                   (when (= (z/string element) "?")
                     (let [element (z/down (z/right element))]
                       (when (or (= (z/string element) ":clj")
                                 (= (z/string element) ":cljs"))
                         (zsymbol? (z/right element)))))))]
    #_(println "zreader-cond-w-symbol?:" (z/string zloc) "result:" result)
    result))

(defn zreader-cond-w-coll?
  "Returns true if this is a reader-conditional with a collection in 
  the first position (could be :clj or :cljs, whatever)."
  [zloc]
  (let [result (when (zreader-macro? zloc)
                 (let [element (z/down zloc)]
                   (when (= (z/string element) "?")
                     (let [element (z/down (z/right element))]
                       (when (or (= (z/string element) ":clj")
                                 (= (z/string element) ":cljs"))
                         (z-coll? (z/right element)))))))]
    #_(println "zreader-cond-w-coll?:" (z/string zloc) "result:" result)
    result))

(defn zdotdotdot
  "Return a zloc that will turn into a string of three dots."
  []
  (edn* (p/parse-string "...")))

(defn zconstant?
  "Returns true if this is a keyword, string, or number, in other words,
  a constant."
  [zloc]
  #_(println "zconstant?" (z/string zloc))
  (let [ztag (z/tag zloc)]
    (if (or (= ztag :unquote) (= ztag :quote) (= ztag :syntax-quote))
      (zconstant? (zfirst zloc))
      (and (not (z-coll? zloc))
           (or (zkeyword? zloc)
               #_(println "zconstant? - not keyword:" (z/string zloc))
               (when (zsexpr? zloc)
                 #_(println "zconstant?:" (z/string zloc)
                            "\n z-coll?" (z-coll? zloc)
                            "z/tag:" (z/tag zloc))
                 (let [sexpr (sexpr zloc)]
                   (or (string? sexpr)
                       (number? sexpr)
                       (= "true" (str sexpr))
                       (= "false" (str sexpr))))))))))

;;
;; # Integrate specs with doc-string
;;
;; Find find-docstring could be a lot smarter, and perhaps
;; find the docstring in the meta data (so that, defn might
;; work, for instance).

(defn find-doc-in-map
  "Given a zloc zipper of a map, find the :doc element."
  [zloc]
  (loop [nloc (z/down zloc)]
    (when nloc
      (if (and (zkeyword? nloc) (= (z/string nloc) ":doc"))
        (when (string? (sexpr (z/right nloc))) (z/right nloc))
        (recur (z/right (z/right nloc)))))))

(defn find-docstring
  "Find a docstring in a zipper of a function."
  [zloc]
  (let [fn-name (z/string (z/down zloc))]
    (cond (or (= fn-name "defn") (= fn-name "defmacro"))
            (let [docloc (z/right (z/right (z/down zloc)))]
              (when (string? (sexpr docloc)) docloc))
          (= fn-name "def") (let [maploc (z/down (z/right (z/down zloc)))]
                              (when (z/map? maploc) (find-doc-in-map maploc)))
          :else nil)))

(defn add-spec-to-docstring
  "Given a zipper of a function definition, add the spec info to
  the docstring. Works for docstring with (def ...) functions, but
  the left-indent isn't optimal.  But to fix that, we'd have to do
  the zprinting here, where we know the indent of the existing
  docstring."
  [zloc spec-str]
  #_(println "spec-str:" spec-str)
  (if-let [doc-zloc (find-docstring zloc)]
    (let [new-doc-zloc (replace* doc-zloc
                                 (z/node (edn* (p/parse-string
                                                 (str "\""
                                                      (str (sexpr doc-zloc))
                                                      spec-str
                                                      "\"")))))]
      (edn* (z/root new-doc-zloc)))
    zloc))

(defn zlift-ns
  "Perform a lift-ns on a pair-seq that is returned from
  partition-2-all-nc, which is a seq of pairs of zlocs that may or
  may not have been sorted and which may or may not have had things
  removed from it and may or may not actually be pairs.  Could be
  single things, could be multiple things.  If contains multiple
  things, the first thing is the key, but if it is just a single
  thing, the first thing is *not* a key. So we only need to work
  on the first of each seq which has more than one element in it,
  and possibly replace it. This will only lift out a ns if all keys
  in seqs with more than one element have the same namespace. Returns
  the [namespace pair-seq] or nil."
  [{:keys [in-code? lift-ns? lift-ns-in-code? unlift-ns?], :as map-options}
   pair-seq ns]
  #_(println "zlift-ns: lift-ns?" lift-ns?)
  (cond
    (and lift-ns? (if in-code? lift-ns-in-code? true))
      (if ns
        ; Already lifted, leave it alone
        ;
        ; One option might be to only lift it if there is more than one
        ; key-value pair, since a lifted namespace with a single key-value
        ; pair is kind of odd.  That would solve the deps.edn problem.
        ; Note that it is not trivial to figure out how many key-value pairs
        ; there are here, since pair-seq isn't really all key-value pairs.
        [ns pair-seq]
        ; Needs a lift, if possible
        (let [strip-ns (fn [named]
                         (if (symbol? named)
                           (symbol nil (name named))
                           (keyword nil (name named))))]
          (loop [ns nil
                 pair-seq pair-seq
                 out []]
            (let [[k & rest-of-pair :as pair] (first pair-seq)
                  #_(println "k:" k "rest-of-x-pair:" rest-of-pair)
                  current-ns
                    (when (and ; This is at least a pair
                            rest-of-pair
                            ; It does not include an implicit ns
                            (not (clojure.string/starts-with? (z/string k)
                                                              "::"))
                            (or (zkeyword? k) (zsymbol? k)))
                      (namespace (z/sexpr k)))]
              (if-not k
                (when ns [(str ":" ns) out])
                (if current-ns
                  (if ns
                    (when (= ns current-ns)
                      (recur ns
                             (next pair-seq)
                             (conj out
                                   (cons (edn* (n/token-node (strip-ns (z/sexpr
                                                                         k))))
                                         rest-of-pair))))
                    (recur current-ns
                           (next pair-seq)
                           (conj out
                                 (cons (edn* (n/token-node (strip-ns (z/sexpr
                                                                       k))))
                                       rest-of-pair))))
                  (when (= (count pair) 1)
                    (recur ns (next pair-seq) (conj out pair)))))))))
    (and ns unlift-ns? (not lift-ns?))
      ; We have a namespace that was already lifted, and we want to unlift
      ; it, and we didn't ask to have things lifted.  That last is so that
      ; lift-ns? has to be false for unlift-ns? to work.
      (loop [pair-seq pair-seq
             out []]
        (let [[k & rest-of-pair :as pair] (first pair-seq)
              #_(println "k:" k "rest-of-y-pair:" rest-of-pair)
              current-ns
                (when (and ; This is at least a pair
                        rest-of-pair
                        ; It does not include an implicit ns
                        (not (clojure.string/starts-with? (z/string k) "::"))
                        (or (zkeyword? k) (zsymbol? k)))
                  (namespace (z/sexpr k)))]
          (if-not k
            [nil out]
            (cond current-ns [ns pair-seq]
                  (= (count pair) 1) (recur (next pair-seq) (conj out pair))
                  :else
                    (recur
                      (next pair-seq)
                      (conj out
                            ; put ns with k
                            (cons (edn* (n/token-node
                                          (symbol
                                            (str ns "/" (name (z/sexpr k))))))
                                  rest-of-pair)))))))
    :else [ns pair-seq]))

;!zprint {:vector {:respect-nl? true}}
(defn zredef-call
  "Redefine all of the traversal functions for zippers, then
  call the function of no arguments passed in."
  [body-fn]
  (#?@(:clj [do-redef-vars :zipper]
       :cljs [with-redefs])
   [zprint.zfns/zstring z/string
    zprint.zfns/znumstr znumstr
    zprint.zfns/zbyte-array? (constantly false)
    zprint.zfns/zcomment? zcomment?
    zprint.zfns/zsexpr sexpr
    zprint.zfns/zseqnws zseqnws
    zprint.zfns/zseqnws-w-nl zseqnws-w-nl
    zprint.zfns/zseqnws-w-bl zseqnws-w-bl
    zprint.zfns/zfocus-style zfocus-style
    zprint.zfns/zstart zstart
    zprint.zfns/zfirst zfirst
    zprint.zfns/zfirst-no-comment zfirst-no-comment
    zprint.zfns/zsecond zsecond
    zprint.zfns/zsecond-no-comment zsecond-no-comment
    zprint.zfns/zthird zthird
    zprint.zfns/zthird-no-comment zthird-no-comment
    zprint.zfns/zfourth zfourth
    zprint.zfns/znextnws zrightnws
    zprint.zfns/znextnws-w-nl znextnws-w-nl
    zprint.zfns/znthnext znthnext
    zprint.zfns/zcount zcount
    zprint.zfns/zcount-zloc-seq-nc-nws zcount-zloc-seq-nc-nws
    zprint.zfns/zmap zmap
    zprint.zfns/zmap-w-nl zmap-w-nl
    zprint.zfns/zmap-w-bl zmap-w-bl
    zprint.zfns/zmap-w-nl-comma zmap-w-nl-comma
    zprint.zfns/zanonfn? zanonfn?
    zprint.zfns/zfn-obj? (constantly false)
    zprint.zfns/zfocus zfocus
    zprint.zfns/zfind-path find-root-and-path-nw
    zprint.zfns/zwhitespace? whitespace?
    zprint.zfns/zlist? z/list?
    zprint.zfns/zvector? z/vector?
    zprint.zfns/zmap? z/map?
    zprint.zfns/znamespacedmap? znamespacedmap?
    zprint.zfns/zset? z/set?
    zprint.zfns/zcoll? z-coll?
    zprint.zfns/zuneval? zuneval?
    zprint.zfns/zmeta? zmeta?
    zprint.zfns/ztag ztag
    zprint.zfns/zlast zlast
    zprint.zfns/zarray? (constantly false)
    zprint.zfns/zatom? (constantly false)
    zprint.zfns/zderef (constantly false)
    zprint.zfns/zrecord? (constantly false)
    zprint.zfns/zns? (constantly false)
    zprint.zfns/zobj-to-vec (constantly nil)
    zprint.zfns/zexpandarray (constantly nil)
    zprint.zfns/znewline? znewline?
    zprint.zfns/zwhitespaceorcomment? whitespace-or-comment?
    zprint.zfns/zmap-all zmap-all
    zprint.zfns/zpromise? (constantly false)
    zprint.zfns/zfuture? (constantly false)
    zprint.zfns/zdelay? (constantly false)
    zprint.zfns/zkeyword? zkeyword?
    zprint.zfns/zconstant? zconstant?
    zprint.zfns/zagent? (constantly false)
    zprint.zfns/zreader-macro? zreader-macro?
    zprint.zfns/zarray-to-shift-seq (constantly nil)
    zprint.zfns/zdotdotdot zdotdotdot
    zprint.zfns/zsymbol? zsymbol?
    zprint.zfns/znil? znil?
    zprint.zfns/zreader-cond-w-symbol? zreader-cond-w-symbol?
    zprint.zfns/zreader-cond-w-coll? zreader-cond-w-coll?
    zprint.zfns/zlift-ns zlift-ns
    zprint.zfns/zfind zfind
    zprint.zfns/ztake-append ztake-append]
   (body-fn)))