 #include <iostream>
  using namespace std;

   class Rectangle {

     private: 
      double length;
       double width;

        public:
         Rectangle( double rectLength, double rectWidth){
             length  = rectLength;

              width = rectWidth;

         }

         int area (){
             return length * width ;

             
         }
          int perimeter (){

             return 2 * (length + width);


          }
           void display (){

             cout <<"length :"<<length <<endl;

 cout <<"width :"<<width<<endl;

  cout <<"area:"<<area ()<<endl;
  cout <<"perimeter:"<<perimeter ()<<endl;
           }


   };


   int main (){
     Rectangle rect1 (5.0, 3.0);
      rect1.display ();

       return 0;



   }