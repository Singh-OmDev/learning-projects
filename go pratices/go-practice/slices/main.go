package main 
 
 import "fmt"


	 func slices(){

		    
	numbers := []int{10, 20, 30, 40, 50, 60, 70}

	  first := numbers[0:3]
second := numbers[2:5]
last := numbers[4:7]






 fmt.Println (" first slice is " , first)
  fmt.Println ("second slice is " , second)
   fmt.Println (" last slice is "  , last)
   


	 }
	    func main (){


	 slices()
  }