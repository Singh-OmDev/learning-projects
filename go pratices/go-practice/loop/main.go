package main

import "fmt"

func main() {
	sum := 0

    for i := 1; i <= 20; i++ {
		 if ( i % 2 == 0) { 
			sum +=i


		 }

    
	 }
	
	  		  fmt.Println("the sum of even numbers from 1 to 20 is", sum)


    }
