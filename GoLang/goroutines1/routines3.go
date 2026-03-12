package main

import (
	"fmt"
	"time"
)

func worker(id int) {
	for i := 1; i <= 3; i++ {
		fmt.Println("Worker", id, "processing task", i)
		time.Sleep(time.Second)
	}
}

func main() {

	go worker(1)
	go worker(2)
	go worker(3)

	time.Sleep(time.Second * 4)
}