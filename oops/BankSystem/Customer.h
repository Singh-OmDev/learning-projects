#ifndef CUSTOMER_H
#define CUSTOMER_H


#include <iostream>
using namespace std;


class Customer {

private:

    int customerId;
    string name;
    string phone;


public:

    Customer(
        int id,
        string name,
        string phone
    );


    void display();


    int getId();


    string getName();

};


#endif