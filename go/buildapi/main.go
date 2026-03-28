package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

// Models
type Course struct {
	CourseId    string  `json:"courseid"`
	CourseName  string  `json:"coursename"`
	CoursePrice int     `json:"price"`
	Author      *Author `json:"author"`
}

type Author struct {
	Fullname string `json:"fullname"`
	Website  string `json:"website"`
}

// Fake DB
var courses []Course

// Helper
func IsEmpty(c *Course) bool {
	return c.CourseId == "" && c.CourseName == ""
}

// MAIN
func main() {

	// sample data
	courses = append(courses, Course{
		CourseId:    "1",
		CourseName:  "Go Basics",
		CoursePrice: 299,
		Author: &Author{
			Fullname: "Om",
			Website:  "omdev.com",
		},
	})

	courses = append(courses, Course{
		CourseId:    "2",
		CourseName:  "Advanced Go",
		CoursePrice: 499,
		Author: &Author{
			Fullname: "John",
			Website:  "john.dev",
		},
	})

	// router
	r := mux.NewRouter()

	// routes
	r.HandleFunc("/", serveHome).Methods("GET")
	r.HandleFunc("/courses", getAllCourses).Methods("GET")
	r.HandleFunc("/course/{id}", getOneCourse).Methods("GET")

	fmt.Println("Server running at port 4000")
	log.Fatal(http.ListenAndServe(":4000", r))
}

// CONTROLLERS

// Home
func serveHome(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("<h1>Welcome to API</h1>"))
}

// Get all courses
func getAllCourses(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Get all courses")

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(courses)
}

// Get one course by ID
func getOneCourse(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Get one course")

	w.Header().Set("Content-Type", "application/json")

	params := mux.Vars(r)

	for _, course := range courses {
		if course.CourseId == params["id"] {
			json.NewEncoder(w).Encode(course)
			return
		}
	}

	json.NewEncoder(w).Encode(map[string]string{
		"message": "No course found with given ID",
	})
}