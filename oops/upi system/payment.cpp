#include <iostream>
 using namespace std;

  class Payment {
     public:
       virtual void  processPayment () = 0;


  };


   class UPI : public  Payment {
     public:

       void  processPayment () override {
         cout <<"processing upi payment"<<endl;

       }
   };

    class Card : public Payment {
          public:

           void processPayment () override {
             cout  <<"processing card payment"<<endl;


           }
    };

     class Cash : public Payment {
         public:
          void processPayment () override {
             cout <<"processing cash payment"<<endl;

          }
     };

      int main (){

         Payment * payment;
           UPI upi;
            Card card;
             Cash cash;


              payment = &upi;
               payment->processPayment ();
                payment = & card;
                 payment-> processPayment ();

                   payment = & cash;
                    payment -> processPayment ();

                     return 0;
      }