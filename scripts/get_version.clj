#!/usr/bin/env bb

(-> (slurp "project.clj")
    read-string
    (nth 2)
    symbol)