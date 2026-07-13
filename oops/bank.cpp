#include <iostream>
 
 using namespace std;
  class BankAccount {
     private: 
     int accountNumber;
      string accountHolderName;
       double balance;


        public :

            BankAccount ( int accNumber, string accHolderName , double accBalance){
    
                accountNumber = accNumber;
                accountHolderName = accHolderName;
                balance = accBalance;



            }

             void  deposit ( double depositAmount){
                balance += depositAmount;


                 
             }

              void withdraw ( double withdrawAmount){
                if  ( withdrawAmount <= balance){
                      balance -= withdrawAmount;

                }
                 else {
                     cout <<"insufficient balance lolll"<<endl;


                 }
              }


               void checkBalance (){

                 cout <<"account number:"<<accountNumber<<endl;
                 cout <<"account holder name:"<<accountHolderName <<endl;
                  cout <<"account balance:"<< balance<<endl;

               }

  };





 int main () {

     BankAccount account1 (12345, "alice smith", 10000);

        account1.checkBalance ();
         account1.deposit ( 5000);
            account1.checkBalance ();
             account1.withdraw ( 2000);
            account1.checkBalance ();
             account1.withdraw ( 15000);
                account1.checkBalance ();
    
                 return 0;




 }