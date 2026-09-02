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
	   _, err = file.WriteString ("jane , 22 , mathematics\n")
	    _, err = file.WriteString ("doe, 32  , physics\n")
		_, err = file.WriteString ("smith , 33  , chemistry\n")
	   
	   if err !=nil {
		 fmt.Println ("error writing to file :", err)
		  return 
	   }

	    fmt.Println ("data  written successfully ")

	  fmt.Println ("file created successfully:", file.Name ())
   }