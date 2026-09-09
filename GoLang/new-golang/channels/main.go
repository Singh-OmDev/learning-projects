package main 

import (
	 "fmt"
)



 func main () {

	  ch :=  make (chan  string )
	  
	   go func () {
		 ch <- "hello jii job done"
	   }  ()
	    

		 value  := <-ch

		  fmt.Println ("Received value from channel :", value)

	 
 }