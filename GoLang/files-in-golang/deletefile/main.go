package main

import (
	"fmt"
	"os"
)

func main() {

	err := os.Rename ("student.txt", "students_backup.txt")

	if err != nil {
		fmt.Println("error deleting file:", err)
	} else {
		fmt.Println("file deleted successfully")
	}
}