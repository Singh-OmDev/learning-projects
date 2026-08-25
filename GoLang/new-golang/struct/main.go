package main

import "fmt"

type Person struct {
    name       string
    gender     string
    occupation string
    salary     float64
    address    string
    role       string
}

func (p Person) introduce() {
    fmt.Printf(
        "Hello my name is %s and I am a %s and my salary is %.2f and I live in %s and my role is %s\n",
        p.name,
        p.occupation,
        p.salary,
        p.address,
        p.role,
    )
}

type Student struct {
    name   string
    age    int
    course string
}

func (s Student) introduce() {
    fmt.Printf(
        "Hello my name is %s and I am %d years old. I am studying %s\n",
        s.name,
        s.age,
        s.course,
    )
}

func main() {
    student1 := Student{
        name:   "john",
        age:    20,
        course: "Computer Science",
    }

    person1 := Person{
        name:        "john",
        gender:      "male",
        occupation:  "student",
        salary:      0.0,
        address:     "123 main street",
        role:        "student",
    }

    student1.introduce()
    person1.introduce()
}