package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type Todo struct {
	UserId    int    `json:"userId"`
	Id        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

// GET Request
func performRequest() {

	res, err := http.Get("https://jsonplaceholder.typicode.com/todos/1")
	if err != nil {
		fmt.Println("error getting:", err)
		return
	}

	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		fmt.Println("error in getting response:", res.Status)
		return
	}

	var todo Todo

	err = json.NewDecoder(res.Body).Decode(&todo)
	if err != nil {
		fmt.Println("error decoding:", err)
		return
	}

	fmt.Println("GET Todo:", todo)
}

// POST Request
func performPostRequest() {

	todo := Todo{
		UserId:    22,
		Title:     "om singh",
		Completed: true,
	}

	// Convert struct → JSON
	jsonData, err := json.Marshal(todo)
	if err != nil {
		fmt.Println("error while sending data:", err)
		return
	}

	// Send POST request
	res, err := http.Post(
		"https://jsonplaceholder.typicode.com/todos",
		"application/json",
		bytes.NewBuffer(jsonData),
	)

	if err != nil {
		fmt.Println("error posting:", err)
		return
	}

	defer res.Body.Close()

	fmt.Println("POST Status:", res.Status)
}

func main() {

	performRequest()
	performPostRequest()

}