 package main 

  import "fmt"


    type Student struct {

		name string
		 age int
		  course string 

	}




   func main (){

	  student1 := Student {name : "john" , age : 20 , course : "golang"}


	   fmt.Println ("before calling changeStudent function , student1 =" , student1)

	    fmt.Println (student1.name)
		 fmt.Println (student1.age)
		  fmt.Println (student1.course)
		   student1.name  = "james"
		    student1.age  = 22
			 student1.course = "python"
			 fmt.Println ("after calling changeStudent function , student1 =" , student1)
		    
		   
   }