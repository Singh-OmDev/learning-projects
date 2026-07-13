#include <iostream>
 using namespace std ;

  class Student {
     private:
    int rollno;
     string name;
      double marks;

       public:
        Student ( int studentRollno , string studentName , double studentMarks){

            rollno = studentRollno;
             name = studentName;
              marks = studentMarks;


        }
         int  calculateGrade (){
             if (marks >= 90){
                 cout <<"GRADE : A"<<endl;


             }

              if ( marks >= 80 && marks <90){
                 cout <<"GRADE: B"<<endl;


              }
               if ( marks >= 70 && marks <80){
                 cout <<"GRADE : C "<<endl;


               }

                if (marks >= 60 && marks <70){
                     cout <<"GRADE : D"<<endl;

                }

                 
         }
        

           int  displayResults  (){
             cout <<"Roll Number:"<<rollno <<endl;
              cout <<"Name:"<<name <<endl;
               cout <<"Marks:"<<marks <<endl;

                calculateGrade ();

             
          }



  };

  int main (){




     Student student1 ( 101, "john doe", 85.0);
      student1.displayResults ();

       Student student2 ( 102, "jane smith", 92.0);
        student2.displayResults ();

         return 0;


  }