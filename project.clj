(defproject nw-calculator "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]]
  :repl-options {:init-ns nw-calculator.core}
  :profiles {:scraper {:source-paths ["scripts"]
                       :dependencies [[clj-http "3.12.3"]
                                      [enlive "1.1.6"]
                                      [com.taoensso/timbre "5.1.2"]
                                      [progrock "0.1.2"]
                                      [slingshot "0.12.2"]]
                       :repl-options {:init-ns nw-calculator.scraper.main}}})

