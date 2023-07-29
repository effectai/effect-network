EOS_CC ?= cdt-cpp

SKIP_CONTRACTS := $(wildcard contracts/swap/*.cpp contracts/taskproxy/*.cpp)

SRC  = $(filter-out $(SKIP_CONTRACTS), $(wildcard contracts/*/*.cpp))
WASM = $(SRC:.cpp=.wasm)
ABI  = $(WASM:.wasm=.abi)

all: $(WASM)

%.abi %.wasm: %.cpp %.hpp $(%-shared.hpp)
	$(EOS_CC) -o $@ $<

.PHONY: serve-docs clean

clean:
	rm -f $(WASM) $(ABI)

serve-docs:
	jekyll s -s docs --livereload

build-docs:
	jekyll b -s docs
