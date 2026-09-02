package main 



 import (

	  "fmt"
	   "bufio"
	    "os"

 )

 func main (){

	// 	os.ReadFile ("student.txt")
	 count := 0
	  

	 file  , err := os.Open ("student.txt")
	  if err !=nil {
		 fmt.Println ("error opening file :", err)
		 return
	  }
	    defer file.Close ()

	  scanner := bufio.NewScanner (file)


	   for scanner.Scan  (){

		 count++
		 fmt.Println ("student:", scanner.Text ())
		  fmt.Println ("total number of students :", count)
	   }

 }