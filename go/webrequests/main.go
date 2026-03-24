package main

import (
	"fmt"
	"io"
	"net/http"
)

const url = "https://jsonplaceholder.typicode.com/posts/1"

func main() {

	fmt.Println("web request in Go")

	response, err := http.Get(url)
	if err != nil {
		panic(err)
	}

	defer response.Body.Close()

	// Correct formatting
	fmt.Printf("response is of type: %T\n", response)

	// Read body
	dataBytes, err := io.ReadAll(response.Body)
	if err != nil {
		panic(err)
	}

	content := string(dataBytes)

	fmt.Println(content)
}