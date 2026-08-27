package main 

 import "fmt"

  type Student struct {

	name string
	age int 
	 course string

  }

   func ( s Student) display (){
	 fmt.Println ("Name:" , s.name)
	  fmt.Println ("age is" , s.age)
	   fmt.Println ("course is", s.course)


   }
    func findStudent(students map[string] Student, name string , )   (Student , bool){
		 student , ok := students [name]
		 return student , ok
		 
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

    student := students ["om"]
	student.course = "mechanical engineering"
	students["om"] = student

 


	 for key , student  := range students {
		 fmt.Println ("key is "  , key)
		  student.display ()
		  fmt.Println ("---------------------")
	

	 }
	  

  }