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

clean:
	rm -f $(WASM) $(ABI)
