package main 

 import "fmt"

  type Student struct {

	name string
	age int 
	 course string

  }

   

  func main (){

	 students := map[string] Student {
	"john" : {
		 name : "john",
		  age: 24,
		   course : "computer science",

	},

	"om": {
		 name : "om",
		  age: 20,
		   course : "computer science",

	},


	 "sumit": {
		 name : "sumit",
		  age: 34,
		   course : "electrical engineering",

	 },



   }



	  student , ok := students["om"]
	   fmt.Println ("om student is ", student , "ok is ", ok)
	





  }