(defproject
 nw-calculator
 "2021.09.21.6"
 :description
 "New World game crafting calculator web application"
 :url
 "https://github.com/sansarip/nw-calculator"
 :license
 {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0",
  :url "https://www.eclipse.org/legal/epl-2.0/"}
 :cljfmt
 {:split-keypairs-over-multiple-lines? true}
 :dependencies
 [[org.clojure/clojure "1.10.3"]
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
 :repl-options
 {:init-ns nw-calculator.core}
 :source-paths
 ["src/cljs"]
 :clean-targets
 ^{:protect false}
 ["resources/public/js/compiled" "target"]
 :aliases
 {"fig:dev"
  ["with-profiles"
   "dev"
   "trampoline"
   "run"
   "-m"
   "figwheel.main"
   "-b"
   "dev"
   "-r"],
  "fig:prod" ["run" "-m" "figwheel.main" "-bo" "prod"],
  "scrape" ["with-profiles" "scraper" "run"],
  "bump-version" ["with-profiles" "versioner" "run"],
  "template" ["with-profiles" "templater" "run"]}
 :profiles
 {:dev
  {:dependencies
   [[binaryage/devtools "1.0.3"]
    [devcards "0.2.7"]
    [day8.re-frame/re-frame-10x "1.1.13"]
    [day8.re-frame/tracing "0.6.2"]
    [com.bhauman/figwheel-main "0.2.14"]]},
  :prod {:dependencies [[day8.re-frame/tracing-stubs "0.6.2"]]},
  :templater
  {:source-paths ["scripts"],
   :main nw-calculator.templater.main,
   :dependencies
   [[environ "1.2.0"] [de.ubercode.clostache/clostache "1.4.0"]],
   :repl-options {:init-ns nw-calculator.templater.main}},
  :versioner
  {:source-paths ["scripts"],
   :dependencies
   [[environ "1.2.0"] [de.ubercode.clostache/clostache "1.4.0"]],
   :main nw-calculator.versioner.main,
   :repl-options {:init-ns nw-calculator.versioner.main}},
  :scraper
  {:source-paths ["scripts"],
   :dependencies
   [[clj-http "3.12.3"]
    [cheshire "5.10.0"]
    [progrock "0.1.2"]
    [slingshot "0.12.2"]],
   :main nw-calculator.scraper.main,
   :repl-options {:init-ns nw-calculator.scraper.main}}})
