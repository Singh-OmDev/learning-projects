package main

import (
	"fmt"
	"os"
)

func main() {

	file, err := os.OpenFile(
		"student.txt",
		os.O_APPEND|os.O_WRONLY|os.O_CREATE,
		0644,
	)

	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}

	defer file.Close()

	_, err = file.WriteString("David, 25, Physics\n")
	_, err = file.WriteString("emily, 33, chemistry\n")

	if err != nil {
		fmt.Println("Error writing to file:", err)
		return
	}

	fmt.Println("Student added successfully!")
}