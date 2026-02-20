//primitive types  (number  , boolean , string hota hai)
  // ek baar ek type define kr diya toh usko change nhi kr skte baad mai jake nhi toh warning dega error phir code compile ho jayga java scipt mai kyu ki java scirpt mai  ye sb type checking nhi hota hai 



   //array 

    let arr = [2,3,4,5,"om"]  //aise error nhi dega 

     let arr2: number [] =[34,5 ];// ab error dega kyu ki  yehe humne yhe specally define kiyya hai ki   arr2 number he hoga us mai string add ni kr skte

                            // tuples
  //tuples bhi array ki trah hota hai bs tuples mai difference ye hai ki tuples mai ye fixed kr skte hai ki array kis type ka hoga wo define kr skte hai for example

   let arr3:[number, string] = [4, "om"];

   //yeha pe jo pheley define kiya hai wo pheley use krnge mtlb order matter krega number pheley define kiya hai toh  number pheley use krenge phir string use krenge 


               //enumeration /enum

            //enum use hota hai key value key pair store krne ke liye 
            
            enum Userrole {
                ADMIN ="admin",
                 GUEST = "guest",
                  SUPER_ADMIN  = "super_admin"

            }
            Userrole.ADMIN // kre ke baad mai kahi use kr skte hai isko baar baar define kren ki jaruart nhi hoga 

            //Any
            //any mtlb jb hamre pass koi varibale ho par hamne usko koi type nhi batya toh wo any define hojata hai by default 
            //ex 
             let a;
              

            //unknow 

            // unknow aur any he same he bs difference itna hai ki any mai aap typescipt ke koi bhi features use nhi  kr skte hai jais ki touppercase () but but unkonw mai use kr skte hai bs use krne se pheley aapko ye batna pdega ki tpe kya hai uska 
             let b : unknown;

              a =23;
               a = "om";
                if (typeof a == "string")
                     a.toUpperCase();

                // Void 

                // jb bhi function banao toh ye batao ki wo function kya return krega 
                 function abcd(): number{
                     return 12;
                 }

                 //NULL
                  //jb app koi cheej dhuntte ho agar wo nh milti toh app return mai null return krte ho
                  let v = null;


                  //UNDEFINED
                   //aap agar kisi varibale koi value nhi doge to wo undefined hoga 

                    let c : undefined;

                    //NEVER
                    //never  waha use krte hai jaha wo kbhi kuch return nhi krenge 

                     function abcdd (): never {
                         while (true){


                         }
                          abcdd();

                          
                     }