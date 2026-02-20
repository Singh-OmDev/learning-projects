// interface mai pheley ye batna  hota hai ki object jo pass skre rhe hai function mai wo kaisa dikhta hai 

 

   // Interface batata hai object ka structure kaisa hoga
interface User {
  name: string;
  email: string;
  password: string;
}

function abcd(obj: User) {
  console.log(obj.name);
}

// Function call with correct object
abcd({ name: "om", email: "om@gmail.com", password: "om" });
     
                // INterface extends
                 //is mai ek interface ki property  dusre interface mai use kr skte hai jaise ki ek user hai uske pass name email and password hai aur mai ek admin banna chaate hai so admin ke pass bhi name email password aur ek extra feature like boolean isAdmin ho 
                  interface User2    {
                     name : "string";
                      email: "string";
                       password:"string";
                  }

                  interface admin extends User2{
                     admin: boolean;
                  }


                   //Alias

                   //alias  mai hum khud ka type bna skte hai jaise ki mai number ka type khud banna chhata hun jaise number ho mere liye sankhya isi ko alias bolte hai 

                //example 

                 type value = string | number | null;

                  let   x :value;

                  