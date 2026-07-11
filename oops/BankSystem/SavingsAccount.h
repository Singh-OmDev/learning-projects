#ifndef SAVINGS_H
 #define SAVINGS_H

  #include "Account.h"


    class  SavingsAccount : public Account {


         private:
          double interestRate;


public:
 double interestRate;

  public: 

   SavingsAccount (
     int accNo,
      double amount,
       double rate
   );

    void addInterst ();

     void display () override;



          
    };

     #endif


