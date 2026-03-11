package main

import (
	"encoding/json"
	"fmt"
)

 type Person struct {
	 Name string `json: "name"`
	  Age int `json : "age"`
	   IsAdult bool `json: "is_adult"`
 }

func main() {

	fmt.Println("getting started with json")

	 person := Person {Name: "om", Age:33, IsAdult : true}
	  fmt.Println("person data is :", person)

	   //convert person into json encoding   marshall is  used to convert the data  into json format 

	     jsonData , err := json.Marshal(person)

		 if err != nil {
			 fmt.Println("error marhalling", err)
			 return
		 }
		  fmt.Println("person data is :" , string(jsonData))

		   //now decoding the json data 

		    var persondata Person 
			 err = json.Unmarshal(jsonData, & persondata)
			  if err !=  nil {
				 fmt.Println( "error unmarshalling ", err)
				  return

			  }
			   fmt.Println("person data is  after unmarshalling:", persondata)
}