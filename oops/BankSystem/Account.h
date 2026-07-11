#ifndef ACCOUNT_H
#define ACCOUNT_H

 #include <iostream>
  using namespace std;



   class Account {

     protected:
      int accountNumber;
       double balance;  

public:
 Account (
    int accNo,
    double amount

 );
  void deposit(
     double amount
  );

   virtual void withdraw (
    double amount
  );

    virtual void display ();





   };

#endif