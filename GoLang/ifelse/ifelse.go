package main



import "fmt"
func main() {


	// if else statement

	age := 20
	if age >= 18 {
		fmt.Println("You are an adult.")
	} else {
		fmt.Println("You are a minor.")
	}

	 //else if
	 score := 85
	 if score >= 90 {
		 fmt.Println("Grade: A")
	 } else if score >= 80 {
		 fmt.Println("Grade: B")
	 } else if score >= 70 {
		 fmt.Println("Grade: C")
	 } else {
		 fmt.Println("Grade: F")
	 }


	

	var role = "admin"
	var hasPermission = true

	if role == "admin" || hasPermission {
		fmt.Println("Access granted")
	} else {
		fmt.Println("Access denied")
	}

	// in go we can declare a variable inside if construct

	 if age  :=20; age >=18{
		 fmt.Println("You are an adult.")
	 }else if  age>=13{
		 fmt.Println("You are a teenager.")
	   }

}	
