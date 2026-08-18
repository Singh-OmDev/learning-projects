package main 


 import "fmt"

  func types (){
	  name := "om"
	   age := 22
	    height := 5.5
		 isStudent := true
		  total := float64 (age) + height 
		   ageFloat := float64(age)
		    ageAgain := int(ageFloat)
		  
		  
		  fmt.Printf("%v %T\n", name, name)
		   fmt.Printf ("%v %T\n", age, age)
		    fmt.Printf ("%v %T\n", height, height)
			 fmt.Printf ("%v %T\n", isStudent, isStudent)
			  fmt.Printf ( "%v %T \n" , total , total)
			 fmt.Printf ("%v %T\n", age, age)
			  fmt.Printf ("%v %T \n" ,ageFloat , ageFloat)
			   fmt.Printf ("%v %T \n" , ageAgain  , ageAgain)
			   
			    


  }

  func main (){
	  
	 types ()


  }