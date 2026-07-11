#ifndef CURRENT_H
 #define CURRENT_H

  #include "Account.h"


   class CurrentAccount : public Account {

       private:
        double overdrafLimit;

         public: 
          CurrentAccount (
             int accNo,
              double amount,
               double limit
          );

           void withdraw (
             double amount
              
           )
            override;

     void display () override;
     

   };


    #endif

