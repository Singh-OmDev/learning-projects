
 package main 


  import "fmt"


   type Person struct {
	 name string
	  gender string
	  age int 

   }


    func ( p * Person ) introduce (){
	fmt.Printf ( "hello my name is  %s  and   i am  a  %s and my age is  % d \n " , p.name , p.gender, p.age)
		 
	}
	 func  ( p * Person)birthday (){
		 p.age ++

	 }

	  func (p * Person) changeName ( newName string){
		  p.name = newName

	  }

   func main (){

	person1 := Person {
		  name :"john",
		   gender : "male",
		    age : 20,

	}

	 person1.introduce()
	  fmt.Printf("after birthday \n")
	 person1.birthday()

	  fmt.Println  ("after birthday")

	 person1.introduce()
	  person1.changeName ("james")
	    person1.introduce ()
		



	 



	 
   }