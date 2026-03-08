package main

import (
	"fmt"
	"time"
)

func main() {

	 //simpl switch statement

	  i:= 5

	  switch i{
	  case 1:
		 fmt.Println(" i am one")
	  case 2:
		 fmt.Println("i am two")
	  case 3: 
	   fmt.Println("i am three")
	  case 4:
		 fmt.Println("i am four")
	  default:
		 fmt.Println("i am  default  case")
	  }


	   //multiple  conditon case

	      switch time.Now().Weekday (){

		  case time.Saturday, time.Sunday:
			 fmt.Println( "its a weekday")
			  default:
		 fmt.Println("its a workday")

		  }


		  //type switch in golang

		    whoAmI :=func(i interface {}){


				  switch   t := i.(type){
				  case int:
					 fmt.Println ("i am an integer")
				  case string:
					  fmt.Println("it's a string")
				  case bool:
					fmt.Println ("i am a boolean")
				  default: 
				   fmt.Println ("other", t)
				  }
			}

			whoAmI("string")
}