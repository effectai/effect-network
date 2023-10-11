(use-modules
 (gnu packages gcc)
 (gnu packages node))

(packages->manifest
 (list (list gcc "lib") node  gnu-make))
