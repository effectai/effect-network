cmake_minimum_required(VERSION 3.5)

project(effect.token)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)

add_contract(effect.token effect.token ${CMAKE_CURRENT_SOURCE_DIR}/effect.token.cpp)
set_target_properties(effect.token PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${CMAKE_CURRENT_BINARY_DIR}")
