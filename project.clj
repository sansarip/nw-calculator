(defproject nw-calculator "2021.09.05.1"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [com.taoensso/timbre "5.1.2"]
                 [org.clojure/clojurescript "1.10.879"]
                 [reagent "1.1.0"]
                 [re-frame "1.2.0"]
                 [cljs-ajax "0.8.3"]
                 [day8.re-frame/http-fx "0.2.3"]
                 [cljsjs/react "17.0.2-0"]
                 [cljsjs/react-dom "17.0.2-0"]
                 [net.dhleong/spade "1.1.0"]
                 [riverford/compound "2020.01.09"]
                 [cljstache "2.0.6"]
                 [binaryage/oops "0.7.1"]
                 [peanuts "0.7.2"]]
  :repl-options {:init-ns nw-calculator.core}
  :source-paths ["src/cljs"]
  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]
  :aliases {"fig:dev"  ["with-profiles" "dev" "trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:prod" ["run" "-m" "figwheel.main" "-bo" "prod"]
            "scrape"   ["with-profiles" "scraper" "run"]}
  :profiles {:dev     {:dependencies [[binaryage/devtools "1.0.3"]
                                      [devcards "0.2.7"]
                                      [day8.re-frame/re-frame-10x "1.1.13"]
                                      [day8.re-frame/tracing "0.6.2"]
                                      [com.bhauman/figwheel-main "0.2.14"]]}
             :prod    {:dependencies [[day8.re-frame/tracing-stubs "0.6.2"]]}
             :scraper {:source-paths ["scripts"]
                       :dependencies [[clj-http "3.12.3"]
                                      [enlive "1.1.6"]
                                      [progrock "0.1.2"]
                                      [slingshot "0.12.2"]]
                       :main         nw-calculator.scraper.main
                       :repl-options {:init-ns nw-calculator.scraper.main}}})


