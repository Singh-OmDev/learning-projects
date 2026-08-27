

package main

import "fmt"


func main() {

	// Create map
	students := make(map[int]Student)

	// Initial students
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
		fmt.Println("6. Delete student")

		var choice int

		fmt.Println("Enter your choice:")
		fmt.Scanln(&choice)

		switch choice {

		// ADD
		case 1:

			addStudent(students)

		// VIEW
		case 2:

			viewStudents(students)

		// EXIT
		case 3:

			fmt.Println("Exiting...")
			return

		// FIND
		case 4:

			var id int

			fmt.Println("Provide the student ID to find:")
			fmt.Scanln(&id)

			student, ok := findStudent(students, id)

			if ok {
				fmt.Println("Student found:")
				student.display()
			} else {
				fmt.Println("Student not found")
			}

		// UPDATE
		case 5:

			var id int
			var name string
			var age int
			var course string

			fmt.Println("Provide the student ID to update:")
			fmt.Scanln(&id)

			fmt.Println("Enter the new name:")
			fmt.Scanln(&name)

			fmt.Println("Enter the new age:")
			fmt.Scanln(&age)

			fmt.Println("Enter the new course:")
			fmt.Scanln(&course)

			success := updateStudent(
				students,
				id,
				name,
				age,
				course,
			)

			if success {
				fmt.Println("Student updated successfully!")
			} else {
				fmt.Println("Student not found")
			}

		// DELETE
		case 6:

			var id int

			fmt.Println("Provide the student ID to delete:")
			fmt.Scanln(&id)

			success := deleteStudent(students, id)

			if success {
				fmt.Println("Student deleted successfully!")
			} else {
				fmt.Println("Student not found")
			}

		// INVALID
		default:

			fmt.Println("Invalid choice")
		}
	}
}