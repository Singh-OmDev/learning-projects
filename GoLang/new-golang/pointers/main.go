package main 
 
 import  "fmt"

   func changeNumber(  num  *int){
    
		 *num = 5
		  fmt.Println ("insde changeNumber function  , num  =" , *num )
		   
	}

	  func main (){
		  
		 num := 11
		   changeNumber( &num)
		    fmt.Println  ("after calling changeNumber function , num =" , num )

	  }