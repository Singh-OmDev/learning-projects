package main

 import "fmt"


  func  main (){


	 
	 ages := map [string] int {

	"john": 20,
    "om": 30,
    "sumit": 34,
    "rahul": 22,

	 
	 }
	  for name, age := range ages {
		 fmt.Println ("name is ", name , "age is ", age)
		  
	  }





  }