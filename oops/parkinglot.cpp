#include <iostream>
 #include <vector>
   #include <string>

 using namespace std;
  class Vehicle {

    protected:
     string  vechicleNumber;
      string ownerName;


       public:
        Vehicle ( string number , string owner) :
         vechicleNumber (number), ownerName (owner){}
             
        
  virtual void park (){
     cout <<vechicleNumber <<"parked successfully"<<endl;

  }

   virtual void unpark (){
     cout <<vechicleNumber<<"unparked successfully"<<endl;
   }

     virtual void displayInfo (){
        cout <<"vehicle number:"<<vechicleNumber<<endl;
        cout <<"owner name:"<<ownerName<<endl;

     }


     //getter
      string getVehicleNumber (){
         return vechicleNumber;


      }

       virtual ~Vehicle(){}



  };

 //----------------- car -------------//
   class  Car : public Vehicle{
     public:
      Car ( string number , string owner)
      : Vehicle (number  , owner){

      }

        void  displayInfo ()  override {
             cout <<"\n---- Car----"<<endl;
              cout <<"vehicle number :"<<vechicleNumber<<endl;
             cout << "owner  name :"<<ownerName<<endl;
              cout <<"type :car"<<endl;
        }
   };

 class Bike : public Vehicle {
     public:
       Bike ( string number  , string owner): 
        Vehicle ( number , owner){

        }


          void displayInfo () override {
             cout <<"\n------ Bike ------"<<endl;
             cout <<" vehicle number:"<< vechicleNumber<<endl;
               cout <<"owner name"<<ownerName<<endl;
                cout <<"type : bike"<<endl;


          }
 };



 // truck  ---------
  class Truck: public Vehicle {
      public: 
       Truck (string number , string owner): Vehicle ( number , owner){}


        void displayInfo () override {
             cout <<"\n------ truck -----"<<endl;
              cout <<"vehicle number "<<vechicleNumber<<endl;
               cout<< "owner "<< ownerName <<endl;
                cout <<"type  truck "<<endl;

        }

  };


   /// parking lot 

    
    class Parkinglot  {
         private:
          vector <Vehicle * > vehicles;
            public:

               void addVehicle(Vehicle * vehicle)
               {
                  vehicles.push_back (vehicle);
                   vehicle-> park ();

                    
               }
 void  removeVehicle ( string  number){
      for ( int i  = 0; i <vehicles.size (); i++){
         if ( vehicles[i]-> getVehicleNumber () == number){
             vehicles[i]-> unpark ();
              delete vehicles[i];
               vehicles.erase (vehicles.begin () + i);
                cout <<"vehicle removed successfully"<<endl;
                 return;

         }
      }
 }
  void  removeVehicle ( string number){
     for ( int i = 0; i<vehicles.size (); i++){

        if ( vehicles[i]-> getVehicleNumber () == number){
            vehicles[i]-> unpark ();
             delete vehicles[i];
              vehicles.erase (vehicles.begin () + i);
               cout <<"vehicle removed successfully"<<endl;
                return;

        }

     }
  }



    };






  int main (){



  }