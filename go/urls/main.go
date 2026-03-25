package main

import (
	"fmt"
	"net/url"
)

  const myurls string = "https://jsonplaceholder.typicode.com/posts/1"

   func  main (){

	 fmt.Println("welcome to handling urls in go lang")

	  fmt.Println(myurls)
	   //parsing

	    result , _ := url.Parse(myurls)

		 fmt.Println(result.Scheme)
		  fmt.Println(result.Host)
		  fmt.Println(result.Path)
		   fmt.Println(result.Port())
		    fmt.Println(result.RawQuery)


			 //now converting the string parameters into urls

			  partsofUrl :=&url.URL {
				 Scheme: "https",
				 Host: "typicode.com",
				  Path:  "posts",
				   RawPath: "user=om",

			  }
			   anotherURL :=partsofUrl.String()

			    fmt.Println(anotherURL)
   }