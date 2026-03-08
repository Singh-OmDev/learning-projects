package main

import "fmt"

// we use  range for iterating data structures

 func main (){

	// iteration through normal for loop
	  nums := []int {3,4,2}
	   
	   for i :=0; i<len(nums); i++{
		 fmt.Println(nums[i])
	   }

	    //now iteration through range 

		 numss := [] int{3,2,2}
		
	for i, numss := range numss {
		 fmt.Println(numss, i)
	}

	  //ranges in maps 
	   m := map[string]string{"fname": "om", "lname": "singh"}
	    for k ,v := range m {
			 fmt.Println (k,v)
			

			  
		}

		   




 }