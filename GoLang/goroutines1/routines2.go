package main

import (
	"fmt"
	"time"
)

func sayHello() {
	for i := 1; i <= 3; i++ {
		fmt.Println("Hello")
		time.Sleep(time.Millisecond * 500)
	}
}

func main() {
	go sayHello()

	for i := 1; i <= 3; i++ {
		fmt.Println("Main function running")
		time.Sleep(time.Millisecond * 1000)
	}
}