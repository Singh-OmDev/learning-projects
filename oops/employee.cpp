#include <iostream>
 using namespace std;

  class Employee {

     private: 
      int id;
       string name;
        double salary;


         //constructor
          public:
           Employee ( int empId, string empName , double empSalary){

             id = empId;
              name = empName;
               salary = empSalary;


           }
            

           void display (){
             cout <<"Employee ID:"<<id <<endl;
              cout <<"employee name:"<<name <<endl;
               cout <<"employee salary:"<<salary<<endl;



           }


           void incrementSalary ( double incrementAmount){
            salary += incrementAmount;

            
           }
            


  };


  int main (){

    Employee emp1 (101, "john doe", 50000.0);
     emp1.display ();
      emp1.incrementSalary ( 5000.0);

       emp1.display ();

        return 0;   



  }