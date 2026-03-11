package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {
	fmt.Println("now trying to do web request in go lang")

	    res , err := http.Get("https://jsonplaceholder.typicode.com/todos/1")
		 if err !=nil   {
		  
		  fmt.Println("error while fetching  the api" , err)
		   return
		  }
		   defer res.Body.Close ()

		   fmt.Println("types of  response" ,res)

		    //reading  the response body 

			 data , err := io.ReadAll (res.Body)
			  if err != nil {
				 fmt.Println("error while reading the data" , err)

				  return
			  }
			   fmt.Println("response",  string(data))



}
