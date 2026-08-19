package main

import "fmt"

func checkage() {
    age := 22

    if age > 18 {
        fmt.Println("you are eligible to vote")
    } else {
        fmt.Println("you are not eligible to vote")
    }
}

func main() {
    checkage()
}