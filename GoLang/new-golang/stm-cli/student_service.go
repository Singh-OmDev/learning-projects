



package main

 import "fmt"




func addStudent(students map[int]Student) {

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
}

// View all students
func viewStudents(students map[int]Student) {

	fmt.Println("All Students:")

	for _, student := range students {
		student.display()
	}
}

// Find student
func findStudent(students map[int]Student, id int) (Student, bool) {

	student, ok := students[id]

	return student, ok
}

// Update student
func updateStudent(
	students map[int]Student,
	id int,
	name string,
	age int,
	course string,
) bool {

	student, ok := students[id]

	if !ok {
		return false
	}

	student.Name = name
	student.Age = age
	student.Course = course

	students[id] = student

	return true
}

// Delete student
func deleteStudent(students map[int]Student, id int) bool {

	_, ok := students[id]

	if !ok {
		return false
	}

	delete(students, id)

	return true
}