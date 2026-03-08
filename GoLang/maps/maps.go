package main

import "fmt"

//maps -> maps in  go are used as hash , objects , dict

 // if key does not exists in  the map then it returns zero value
 func main (){

	 //creating the map

	  m :=make(map[string]string)
 //setting an element
  m["name"] = "golang"
   m["area"] = "backend"


  //to get element
   fmt.Println((m["name"]))
    fmt.Println((m["area"]))

 }