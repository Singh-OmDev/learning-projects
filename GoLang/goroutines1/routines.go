package main

import (
	"fmt"
	"time"
)

func printNumbers() {
	for i := 1; i <= 5; i++ {
		fmt.Println(i)
	}
}

func printLetters() {
	for i := 'A'; i <= 'E'; i++ {
		fmt.Println(string(i))
		time.Sleep(time.Millisecond * 500)
	}
}

func main() {
	go printNumbers()
	go printLetters()

	time.Sleep(time.Second * 3)
}