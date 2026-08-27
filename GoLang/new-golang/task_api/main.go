package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Task struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Completed   bool   `json:"completed"`
}

// Global tasks
var tasks = []Task{
	{
		ID:          1,
		Title:       "Learn Go",
		Description: "Learn REST APIs",
		Completed:   false,
	},
	{
		ID:          2,
		Title:       "Build project",
		Description: "Create Task API",
		Completed:   false,
	},
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello from Task API!")
}

func getTasks(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(tasks)
}

func main() {

	// Home route
	http.HandleFunc("/", homeHandler)

	// Get tasks route
	http.HandleFunc("/tasks", getTasks)

	// Start server
	fmt.Println("Server is running on http://localhost:9000")

	err := http.ListenAndServe(":9000", nil)

	if err != nil {
		fmt.Println("Error starting server:", err)
	}
}