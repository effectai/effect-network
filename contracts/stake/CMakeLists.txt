cmake_minimum_required(VERSION 3.5)

project(stake)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)

add_contract(stake stake ${CMAKE_CURRENT_SOURCE_DIR}/stake.cpp)
