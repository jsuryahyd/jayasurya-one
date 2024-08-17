#!/bin/bash
cd wasm/go-wasm
GOOS=js GOARCH=wasm go build -o ../../src/assets/js/main.wasm .