package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	Name    string `json:"name"`
	Age     int    `json:"age"`
	IsAdult bool   `json:"is_adult"`
}

func main() {

	fmt.Println("Getting started with JSON")

	person := Person{Name: "om", Age: 33, IsAdult: true}
	fmt.Println("Person struct:", person)

	// Marshal (Struct → JSON)
	jsonData, err := json.Marshal(person)
	if err != nil {
		fmt.Println("Error marshalling:", err)
		return
	}

	fmt.Println("JSON data:", string(jsonData))

	// Unmarshal (JSON → Struct)
	var personData Person
	err = json.Unmarshal(jsonData, &personData)
	if err != nil {
		fmt.Println("Error unmarshalling:", err)
		return
	}

	fmt.Println("After unmarshalling:", personData)
}