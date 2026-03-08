package main

import "fmt"

//slices are dynamic arrays

//most used in go
//usedfull methods

 func main (){

	 // uninitialized slice is nill

	 var numss []  int 
	  fmt.Println(numss);

	   //if we do not want to print nill slice  then we use make
 
	    var nums = make([]int , 2, 5)
		//capacity -> maximum number of elements  can fill
		 fmt.Println(nums == nil)

		  nums = append (nums, 1)
		   fmt.Println(nums)
		    fmt.Println (cap(nums))



	 
 }