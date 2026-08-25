package main

import "fmt"

type Student struct {
	name   string
	age    int
	course string
}

func (s Student) introduce() {
	fmt.Printf(
		"Hello my name is %s and I am %d years old and I am studying %s\n",
		s.name,
		s.age,
		s.course,
	)
}

func findStudentByName(students []Student, name string) *Student {
	for i := range students {
		if students[i].name == name {
			return &students[i]
		}
	}

	return nil
}

 func deleteStudent(students [] Student , name string) [] Student {
	  for i, student := range students {
		   if student.name == name {
			 return append (students [:i], students [i +1:]...)
			  
		   }
	  }
	   return students


		  

 }
  

func main() {

	students := []Student{
		{name: "john", age: 20, course: "computer science"},
		{name: "om", age: 30, course: "computer science"},
		{name: "sumit", age: 34, course: "computer science"},
		{name: "rahul", age: 22, course: "computer science"},
	}

	// Introduce all students
	for _, student := range students {
		student.introduce()
	}

	// Find Sumit
	student := findStudentByName(students, "sumit")

	if student != nil {
		fmt.Println("\nStudent found!")
		fmt.Println("Name:", student.name)
		fmt.Println("Age:", student.age)
		fmt.Println("Course:", student.course)

		// Change Sumit's course
		student.course = "golang"
	} else {
		fmt.Println("Student not found")
	}

	// Print students after updating
	fmt.Println("\nStudents after update:")

	for _, student := range students {
		fmt.Println(
			"Name:", student.name,
			"Age:", student.age,
			"Course:", student.course,
		)
	}

	  for _, student := range students {
		 student.introduce()
	  }
	 
}