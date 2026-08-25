package main 

 import "fmt"




  func main (){

	   ages := map [string] int {
	 "john": 20,
	  "om": 30,
	   "sumit": 34,

	   "rahul": 22,


  }
   	    ages["om"] = 77

delete (ages, "sumit")

	 fmt.Println (ages)

	  fmt.Println ("john age is", ages["john"])

	   fmt.Println ("om age is", ages["om"])
	    fmt.Println ("sumit age is ", ages ["sumit"])
		 
		 fmt.Println ("rahul age is" ,ages ["rahul"])
		  fmt.Println ("om  age is "  , ages["om"])

		   if age , ok := ages ["om"]; ok {
			 fmt.Println ("om age is ", age)
		   }


		     if age , ok :=ages ["sumit"]; ok {
				 fmt.Println ("sumit age is"  , age)
				 
			 }
  }