package main 
  import 
  (
	 "fmt"
	  "os"
  )
   func main (){

	file , err := os.Create ("student.txt")


	 if err !=nil {
		fmt.Println ("error creating file:", err)
		 return 

	 }

	 defer file.Close ()

	  _, err = file.WriteString ("john , 20  , computer science\n")
	   
	   if err !=nil {
		 fmt.Println ("error writing to file :", err)
		  return 
	   }

	    fmt.Println ("data  written successfully ")

	  fmt.Println ("file created successfully:", file.Name ())
   }