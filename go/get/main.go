package main

import (
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
)

func main() {

	fmt.Println("welcome to get request")
	 PerformGetRequest()
	  PerformPostJsonRequest()
	   PerformPostFormRequest()



}

func PerformGetRequest(){

	 const myurl = "http://localhost:3000/users"

	  response , err:=  http.Get(myurl)

	   if err !=nil {

		panic(err)
		 
	   }

	   defer response.Body.Close()
     fmt.Println("status code :" , response.StatusCode)

      fmt.Println( "content length is :", response.ContentLength)
     content , _ := io.ReadAll(response.Body)
	 fmt.Println(string(content))



	}
func PerformPostJsonRequest() {

	const myurl = "http://localhost:3000/users"

	requestBody := strings.NewReader(`
	{
		"name": "Om from Go",
		   "course": "computer science"

	}
	`)

	response, err := http.Post(myurl, "application/json", requestBody)
	if err != nil {
		panic(err)
	}

	defer response.Body.Close()

	data, err := io.ReadAll(response.Body)
	if err != nil {
		panic(err)
	}

	fmt.Println("POST Response:", string(data))
}


func  PerformPostFormRequest(){

	  const myurl = "http://localhost:3000/postform"

	   data := url.Values {}

	    data.Add("firstname", "om")
		 data.Add("lastname", "singh")
		 data.Add("email", "om@gmail.com")

		 response , err :=  http.PostForm(myurl, data)
		  if err != nil {
			panic(err)

		  }
		   defer response.Body.Close()
		    

		    content , _ := io.ReadAll(response.Body)
			 fmt.Println (string(content))

 
		}