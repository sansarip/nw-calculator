#!/usr/bin/env bb

(require '[babashka.process :refer [sh]])
(require '[clojure.string :as string])
(require '[selmer.parser :refer [render]])

(def version (-> (sh "sh -c \"./scripts/get_version.clj\"")
                 :out
                 string/trim))

(sh "git reset .")
(sh "git add project.clj docs resources/public/js/config.js")
(sh (render "git commit -m \":bookmark: Release {{version}}\"" {:version version}))
(sh (render "git tag v{{version}}" {:version version}))
