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


             int getId (){
                  return id ;
                   
             }

              string getName (){
                 return name;

              }

               double getPrice (){
                 return price;

               }

                int getStock (){
                     return stock ;

                }
  };

  int main (){

     vector <Product> products;
      products.push_back(Product (2, "laptop", 550000 , 10));
        products.push_back(Product (3, "mobile", 25000 , 20));
         products.push_back(Product (4, "headphone", 5000 , 30));
            products.push_back(Product (5, "keyboard", 2000 , 40));
             products.push_back(Product (6, "mouse", 1000 , 50));
    
            for ( int i = 0; i<products.size (); i++){
                products[i].display ();
            }
    
             return 0; 





  }