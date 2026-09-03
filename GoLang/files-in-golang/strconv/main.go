package main 


import (
	"fmt"
	 "strconv"


)

  func main (){


	age := "22"
	 ageInt  , err :=strconv.Atoi (age)
	  if err !=nil{
		 fmt.Println ("error converting string to int :" , err)
		 return
	  }

	   ageInt = ageInt + 5
	   fmt.Println ("age  in int :" , ageInt)
  }