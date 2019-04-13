cmake_minimum_required(VERSION 3.5)

project(swap)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)

add_contract(swap swap ${CMAKE_CURRENT_SOURCE_DIR}/swap.cpp)
