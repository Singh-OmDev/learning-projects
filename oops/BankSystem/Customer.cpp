#include "Customer.h"





 Customer::Customer (
     int id,
      string n,
       string p
 )
  {

     customerId = id;
      name = n;
       phone = p;

  }

  void Customer::display (){
     cout <<"Customer ID"
      <<customerId<<endl;


       cout <<"Name"
        <<name <<endl;

         cout <<"Phone"
          <<phone <<endl;


  }

  string Customer::getName (){
     return name;
     
  }