(use-modules (blockchain)
             (gnu packages gcc)
             (gnu packages node))

(packages->manifest
 (list (list gcc "lib") node eosio-cdt gnu-make))
