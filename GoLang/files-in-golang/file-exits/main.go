package main

import (
	"fmt"
	"os"
)

func main() {

	_, err := os.Stat("student.txt")

	if err == nil {
		fmt.Println("file exists")
	} else {
		fmt.Println("file does not exist")
	}
}