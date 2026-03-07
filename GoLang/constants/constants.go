package main

import "fmt"

func main() {
	const age = 30

	fmt.Println("My age is:", age)

	// age = 31 // This will cause a compile-time error because 'age' is a constant'


	 const (
		 port = 5000
		  host = "localhost"

	 )
	fmt.Println(port,host)
}
