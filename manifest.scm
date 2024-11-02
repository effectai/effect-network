(use-modules
 (gnu packages gcc)
 (gnu packages node)
 (nongnu packages clojure))

(packages->manifest
 (list (list gcc "lib") node  gnu-make babashka))
