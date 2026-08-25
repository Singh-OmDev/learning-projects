 package main 

  import "fmt"


    type Student struct {

		name string
		 age int
		  course string 

	}

	 func (s Student ) introduce (){
   fmt.Println ("hello my  name is "  + s.name + " and I am " + string(s.age) + " years old. I am studying " + s.course)


	 }


   func main (){

	 student1 := Student{name: "john" , age : 20 , course : "computer Science"}



	  



		 
	    
student1.introduce()

	   

	 
   }