package main

import "fmt"
 /// single value return 

func add(a int, b int) int {
	return a + b
}


 // returning multiple values

  func getLanguages ()  (string, string, string){
	 return "golang", "javascript" , "c"
	  
  }

func main() {

	result := add(2, 3)
	fmt.Println(result)
	 fmt.Println( getLanguages())

}