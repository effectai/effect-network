EOS_CC ?= eosio-cpp
ABI_CC ?= eosio-abigen

SRC  = $(wildcard contracts/*/*.cpp)
WASM = $(SRC:.cpp=.wasm)
ABI  = $(WASM:.wasm=.abi)

all: $(WASM) $(ABI)

%.wasm: %.cpp %.hpp
	$(EOS_CC) -o $@ $<

%.abi: %.cpp
	$(ABI_CC) -contract=$(basename $(^F)) -output $@ $^

.PHONY: serve-docs clean

clean:
	rm -f $(WASM) $(ABI)

serve-docs:
	jekyll s -s docs --livereload

build-docs:
	jekyll b -s docs
