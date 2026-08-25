package main 

 import "fmt"




  func main (){

	   ages := map [string] int {
	 "john": 20,
	  "om": 30,
	   "sumit": 34,

  }


	 fmt.Println (ages)

	  fmt.Println ("john age is", ages["john"])

	   fmt.Println ("om age is", ages["om"])
	    fmt.Println ("sumit age is ", ages ["sumit"])

  }