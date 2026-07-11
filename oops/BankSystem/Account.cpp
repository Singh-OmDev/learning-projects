#include "Account.h"



Account::Account(
    int accNo,
    double amount
)
{

    accountNumber=accNo;

    balance=amount;

}



void Account::deposit(
    double amount
)
{

    balance+=amount;


    cout<<"Money Deposited\n";

}



void Account::withdraw(
    double amount
)
{

    if(amount>balance)
    {

        cout<<"Insufficient Balance\n";

        return;

    }


    balance-=amount;


    cout<<"Withdraw Successful\n";

}




void Account::display()
{

    cout<<"Account Number: "
        <<accountNumber<<endl;

    cout<<"Balance: "
        <<balance<<endl;

}