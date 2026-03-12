package main

import "fmt"

func printSlice (items[]int) {
	for _, item := range items {
		 fmt.Println(item)

	}
}

func main() {

	fmt.Println("getting started with generic  concepts")

	 printSlice([]int {1,2,3})
}