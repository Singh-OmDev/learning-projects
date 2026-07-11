#include <iostream>

 #include "Customer.h"
  #include "Account.h"

   using namespace std;



    int main (){
        Customer c1 (
             1, "om", "33333333333333"
        );


         Account a1 (
             1001, 5000
         );

         c1.display();
          cout <<endl;



           a1.showBalance();


            a1.deposit(
                2000
            );

            a1.withdraw(
                1000
            );

            a1.showBalance();

             return 0 ;

    }