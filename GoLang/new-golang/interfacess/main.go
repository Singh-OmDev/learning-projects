package main 

 import "fmt"

  type Payment interface {
	 pay (amount float64)
  }


   type UPI struct {
	 
	 
	
	  
   }
   
    func  ( u UPI ) pay ( amount float64){
		  fmt.Println  ("paying using UPI with amount" , amount)

	}
    type CreditCard struct {
	}

	 func  ( c CreditCard) pay (amount float64) {
		 fmt.Println ("paying using credit card with amount" ,amount )
  
	 }
	  func makepayment (p Payment  , amount float64){
		 p.pay (amount)

		 
	  }


   
  func main (){

	 

	 upi := UPI{}
  card := CreditCard{}

makepayment(upi, 1000)
makepayment(card, 20000)
		  


  }