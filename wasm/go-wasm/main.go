package main

import (
	"syscall/js"
	"fmt"
	"jayasurya.one/go-wasm/jsonHelpers"
)


func main() {
	// alert := js.Global().Get("alert")
	// alert.Invoke("Hello from Go WebAssembly!")
	console := js.Global().Get("console")
	console.Call("log","Hello from Go webassembly to console.")

	js.Global().Set("PrettifyJSON", exposeJSPrettify())
	<-make(chan struct{})
}


func exposeJSPrettify() js.Func{
	return js.FuncOf(func(this js.Value, args []js.Value) interface{}{
		// fmt.Printf("this %v\n", this) //window object
		if(len(args) != 1){
			return "PrettifyJSON takes exactly 1 argument"
		}

		input := args[0].String()

		prettifiedStr, err := jsonHelpers.PrettifyJSON(input)

		if(err!=nil){
			fmt.Printf("unable to prettify given string %v\n", err)
			return err.Error()
		}
		
		return prettifiedStr
	})
}