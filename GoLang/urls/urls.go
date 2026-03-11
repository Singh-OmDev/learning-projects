package main

import (
	"fmt"
	"net/url"
)

func main() {

	fmt.Println("Learning urls")

	 myURL := "https://jsonplaceholder.typicode.com/todos/1"
	  fmt.Println("type of  url" , myURL)
	    

	  parsedURL , err := url.Parse(myURL)
	   if err  != nil {
		  fmt.Println("can't parse url", err)
		   return

	   }

	     fmt.Println("type of  URL :", parsedURL)
		   fmt.Println("scheme :" , parsedURL.Scheme)
		    fmt.Println("host:", parsedURL.Host)
			 fmt.Println("path:" , parsedURL.Path)

			 fmt.Println("RawQuery:" ,  parsedURL.RawQuery)


}