package main 
  import (
	 "fmt"
	 "sync"
  )
   func main (){

	 var wg sync.WaitGroup
	  wg.Add (2)
	   

	   go func (){
		 defer wg.Done ()
		  fmt.Println ("hello from goroutine 1")

	   } ()

	     go func () {
			  defer wg.Done ()

			   fmt.Println ("hello from goroutine 2")

		 } ()
		  wg.Wait ()
		   fmt.Println ("Main completed")
   }