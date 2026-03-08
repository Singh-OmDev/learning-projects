package main

import "fmt"

// pass by value
func changeNum(num int) {
	num = 4
	fmt.Println("in change", num)
}

// pass by reference (using pointer)
func changenum(num *int) {
	*num = 6
	fmt.Println("in change", *num)
}

func main() {

	num := 1
	changeNum(num)
	fmt.Println("after changeNum in main", num)

	numm := 3
	changenum(&numm)
	fmt.Println("after changing", numm)

}