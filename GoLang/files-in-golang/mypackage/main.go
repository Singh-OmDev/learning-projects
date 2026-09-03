package main

import (
    "fmt"
    "mypackage/calculator"
)

func main() {
    fmt.Println("Main started")

    result := calculator.Add(10, 20)

    fmt.Println("Result:", result)
}