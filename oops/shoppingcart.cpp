#include <iostream>

 #include <vector>
  #include <string>

 using namespace std;



  class Product {
     private:
      int id;
       string name;
        double price;
         int stock;



          public:
           Product ( int id , string name  , double  price  , int stock){
             this-> id = id;
              this-> name = name;
               this-> price = price;
                this-> stock = stock;
           }

            void display (){
                 cout <<"ID"<<id<<endl;
                  cout <<"name"<<name<<endl;
                   cout <<"price"<<price<<endl;
                    cout <<"stock"<<stock<<endl;
                    cout <<"----------------"<<endl;
                    
                 
            }
  };

  int main (){

      Product p1 (1, "Laptop", 55000, 10);
       Product p2 (2, "mouse", 999, 20);
        Product p3 (3 , "keyboard", 1999, 15);


        p1.display ();
         p2.display ();
          p3.display ();
           return 0;
           




  }