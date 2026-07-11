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

           //remove books
             void removeBook ( int id){
                 for(auto it  = books.begin();
                  it  != books.end();

                   it++)
                   {
                     if (it->getId()== id){
                         books.erase(it);
                          cout <<"books removed"<<endl;

                          return;

                     }
                   }

                    cout <<" book not found"<<endl;


             }




 };


  class User {

     protected:
      

      int id;
       string name;
         
        public: 
         User ( int id , string name){
             this-> id = id;
              this-> name =  name;

         }

          virtual void  showRole (){
             cout <<"normal user"<<endl;


          }


          void displayUser (){
             cout <<"ID" <<id<<endl;
              cout<< "name"<<name <<endl;

          }
        


  };

   class Student : public  User {
     private:
      int rollNo;

       public: 
        Student(
             int id,
              string name,
               int rollNo

        ): User (id , name)
         {
             this-> rollNo = rollNo;

         }
          void diplayStudent (){
             displayUser ();
              cout <<"rollNo" <<rollNo <<endl;

              
          }

           void showRole () override{
             cout <<"role : student"<<endl;

           }

         
       
     
   };

    class Admin :public User {
         public:

           Admin  ( int id , string name): User ( id  , name){

           }

            void addBookPermission (){
                 cout <<name << "can add book"<<endl;

            }

 void showRole () override {
     cout <<"role : admin"<<endl;


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

           lib.searchBook(101);

            Student s1 (1, "John", 123);
             s1.diplayStudent();

             Admin a1 (2, "Alice");
              a1.addBookPermission();

               User * user ;
               Student s1 (4 ,"om");
                Admin a1 (2,  "admin");

                 user = &s1;

                  user->showRole();

                   user = &a1;

                    user->showRole();

                     return 0;
                     






     return 0;
 }

 