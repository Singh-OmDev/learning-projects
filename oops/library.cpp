 #include <iostream>
  using namespace std ;


   class Library {
      private:
       string title;
        string author;
         bool isIssued;



      public:
       //constructor 

         Library( string  t , string a ){

            title = t;
             author = a;
              isIssued = false;

         }

          
          //issue book 
           void issueBook (){

             if (isIssued){
                 cout <<" book is already issues"<<endl;


             }

               else {
                 isIssued = true;
                  cout <<"book issued successfully"<<endl;

               }
           }

            //return  book 
             
            void returnBook (){
                 if (!isIssued){
                     cout <<" book is already available in the library"<<endl;

                 }
                  else {
                      isIssued = false;
                       cout <<"book returned successfully"<<endl;

                  }
            }


             //display 
              void displayStatus (){
                 cout <<"\n --------- book details"<<endl;
                 cout <<"title:"<<title <<endl;
                  cout <<'author'<<author <<endl;
                   cout <<"status:"<<(isIssued ? "Issued" : "available")
                    <<endl;

              }

   };


   int main (){


    Library book1("the great gatsby", "f.scott");
    book1.displayStatus();
     book1.issueBook();
      book1.displayStatus();
       book1.returnBook();
        book1.displayStatus();

         return 0;


   }