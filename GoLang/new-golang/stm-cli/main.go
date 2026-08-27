package main

import "fmt"

type Student struct {
	ID     int
	Name   string
	Course string
	Age    int
}

func (s Student) display() {
	fmt.Println("ID:", s.ID)
	fmt.Println("Name:", s.Name)
	fmt.Println("Age:", s.Age)
	fmt.Println("Course:", s.Course)
	fmt.Println("--------------------")
}

func main() {

	// Create map
	students := make(map[int]Student)

	// Add some initial students
	students[1] = Student{
		ID:     1,
		Name:   "john",
		Course: "computer science",
		Age:    20,
	}

	students[2] = Student{
		ID:     2,
		Name:   "om",
		Course: "computer science",
		Age:    20,
	}

	// Menu loop
	for {

		fmt.Println("\nStudent Management System")
		fmt.Println("1. Add student")
		fmt.Println("2. View students")
		fmt.Println("3. Exit")
		fmt.Println("4. Find student")
		fmt.Println("5. Update student")

		var choice int

		fmt.Println("Enter your choice:")
		fmt.Scanln(&choice)

		switch choice {

		// ---------------- ADD STUDENT ----------------
		case 1:

			var id int
			var name string
			var age int
			var course string

			fmt.Println("Enter student ID:")
			fmt.Scanln(&id)

			fmt.Println("Enter student name:")
			fmt.Scanln(&name)

			fmt.Println("Enter student age:")
			fmt.Scanln(&age)

			fmt.Println("Enter student course:")
			fmt.Scanln(&course)

			students[id] = Student{
				ID:     id,
				Name:   name,
				Age:    age,
				Course: course,
			}

			fmt.Println("Student added successfully!")

		// ---------------- VIEW STUDENTS ----------------
		case 2:

			fmt.Println("All Students:")

			for _, student := range students {
				student.display()
			}

		// ---------------- EXIT ----------------
		case 3:

			fmt.Println("Exiting...")
			return

		// ---------------- FIND STUDENT ----------------
		case 4:

			var id int

			fmt.Println("Provide the student ID to find:")
			fmt.Scanln(&id)

			student, ok := students[id]

			if ok {
				fmt.Println("Student found:")
				student.display()
			} else {
				fmt.Println("Student not found")
			}

		// ---------------- UPDATE STUDENT ----------------
		case 5:

			var id int
			var name string
			var age int
			var course string

			fmt.Println("Provide the student ID to update:")
			fmt.Scanln(&id)

			student, ok := students[id]

			if ok {

				fmt.Println("Enter the new name:")
				fmt.Scanln(&name)

				fmt.Println("Enter the new age:")
				fmt.Scanln(&age)

				fmt.Println("Enter the new course:")
				fmt.Scanln(&course)

				// Update student
				student.Name = name
				student.Age = age
				student.Course = course

				// Put updated student back into map
				students[id] = student

				fmt.Println("Student updated successfully!")

			} else {

				fmt.Println("Student not found")

			}


			 // case 6:
			 case  6:
				  var id int 
				  fmt.Println ("Provide the student ID to delete:")
				   fmt.Scanln( & id)

				    _, ok := students [id]
					 
					 if ok {
						 delete (students  ,id )
						 fmt.Println ("Student deleted successfully !")

					 }  else {
						 fmt.Println ("student not found")
					 }




		// ---------------- INVALID CHOICE ----------------
		default:

			fmt.Println("Invalid choice")
		}
	}
}