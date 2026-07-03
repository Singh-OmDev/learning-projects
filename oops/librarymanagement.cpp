 #include <iostream>
 #include <vector>

  using namespace std;

class Book {
     private:
      int id;
      string title;
      string author;
      bool isIssued;

       public:
       Book (
         int id, string title, string author 
       )
        {
            this->id = id;
             this-> title = title;
              this->author = author;
               this->isIssued = false;

        }

          void display (){
              cout <<"ID:" <<id <<endl;
              cout <<"Title: " <<title <<endl;
               cout<<"Author: " <<author <<endl;
                
          }

           int getId (){
             return id;

           }

            string getTitle (){
                 return title;

            }

            string getAuthor (){
                 return author;
            }

             

            //setter
             void setTitle (string title){
                 this->title = title;

             }
              void setAuthor ( string author){
                 this->author = author;

              }



              // add issue /return logic

                void issueBook (){
                     if (isIssued){
                         cout <<"book already issued "<<endl;

                     }
                    else {
                         isIssued = true;
                          cout <<"book issued successfully"<<endl;

                    }
                }

                 //return book 

                  void returnBook (){
                     if (!isIssued){
                         cout <<" book was not issued"<<endl;

                          
                     }
                      else {
                         isIssued = false;
                          cout <<"book returned successfully"<<endl;


                      }
                  }


};


 class Library {
     private:

      vector <Book> books;

       public: 


        void addBook ( Book book){
             books.push_back (book);

              cout <<"book addes successfully"<<endl;





        }

         //show all books

          void showBooks (){
             if (books.empty ()){
                 cout <<"no books available"<<endl;
                  return;
            
          }

           for (Book b: books){
             b.display ();
              cout <<"------------------"<<endl;

           }
        }


         //search boooks
          void searchBook ( int id){
             for (Book b: books){
                  if ( b.getId ()== id)
                  {
                     if (b.getId ()== id){
                         cout <<" book found"<<endl;
                          b.display();

                          return;


                     }
                  }

                   cout <<"book not found"<<endl;

                   
             }
          }




 };



 int main  (){
     Book b1 (101, "C++ programming", "Bjarne");
      
    
      b1.display();
       b1.issueBook ();
       b1.issueBook ();
       b1.returnBook ();


        Library lib;
         Book b1(102, "java programming",  "james");

          lib.addBook (b1);
           lib.showBooks();




     return 0;
 }

 