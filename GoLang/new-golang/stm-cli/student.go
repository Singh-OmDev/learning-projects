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
