package main 

 import "fmt"

  type Payment interface {
	 pay (amount float64)
  }

  
   type UPI struct {

   }

    type Cash struct {
		  
	}
	 func ( c Cash ) pay ( amount float64){
		  fmt.Println ("paying using cash with amount" , amount)

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

   cash := Cash {}
makepayment(upi, 1000)
makepayment(card, 20000)
makepayment(cash, 5000)

  payment := [] Payment {
	 UPI {},
	  Cash {},
	   CreditCard {},
   }

 for _, p := range payment {
	 p.pay(1000)
 }
		  

  }