#include "SavingsAccount.h"

 SavingsAccount:: SavingsAccount(
     int accNo,
      double amount,
       double rate
 ):
  Account (
     accNo,
      amount


  )

  {
      interestRate=rate;

  }


void SavingsAccount:: addInterst ()
 {
     double interest = balance * interestRate/100;

     balance+= interest;

      cout <<"interest added "<<endl;


 }
  void SavingsAccount::display ()
   
  {
     
     cout <<"----- savings account -----"<<endl;

     Account:: display ();

      cout <<"interest rate:"
       <<interestRate
        <<"%"
         <<endl;



  }