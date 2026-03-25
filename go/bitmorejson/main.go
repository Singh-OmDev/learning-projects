package main

import (
	"encoding/json"
	"fmt"
)

type course struct {
	Name     string   `json:"courename"`
	Price    int      `json:"price"`
	Platform string   `json:"platform"`
	Password string   `json:"password"`
	Tags     []string `json:"tags"`
}

func main() {

	fmt.Println("welcome to json video")

	EncodeJson()
	DecodeJson()
}

// 🔹 Encode Go → JSON
func EncodeJson() {

	lcoCourses := []course{
		{
			Name:     "react js bootcamp",
			Price:    233,
			Platform: "learncodeonline.in",
			Password: "abc123",
			Tags:     []string{"web-dev", "js"},
		},
		{
			Name:     "node js bootcamp",
			Price:    2333,
			Platform: "learncodeonline.in",
			Password: "abc12333",
			Tags:     []string{"web-dev", "js"},
		},
	}

	finalJson, err := json.MarshalIndent(lcoCourses, "", "  ")
	if err != nil {
		panic(err)
	}

	fmt.Println("Encoded JSON:")
	fmt.Println(string(finalJson))
}

// 🔹 Decode JSON → Go
func DecodeJson() {

	jsonDataFromWeb := []byte(`
	{
		"courename": "node js bootcamp",
		"price": 2333,
		"platform": "learncodeonline.in",
		"password": "abc12333",
		"tags": ["web-dev", "js"]
	}
	`)

	var lcocourse course

	checkvalid := json.Valid(jsonDataFromWeb)

	if checkvalid {
		fmt.Println("\nJSON was valid")

		err := json.Unmarshal(jsonDataFromWeb, &lcocourse)
		if err != nil {
			panic(err)
		}

		fmt.Printf("Decoded struct: %#v\n", lcocourse)
	} else {
		fmt.Println("JSON was NOT valid")
	}
}