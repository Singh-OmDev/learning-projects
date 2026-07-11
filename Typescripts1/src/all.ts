// //  let user  : {
// //     name: string,
// //     age: number,
// //     isStudent : boolean,
// //     skills: string,
// //     salary : null, 
// //  }

// //  = {
// //      name: "om",
// //      age: 22,
// //      isStudent: true,
// //      skills: "JavaScript",
// //      salary: null
// //    }
// //     console.log (user);

//      // function 

//       // function  greet (name: string) :string{
//       //   return `hello${name}`;

//       // }


//       //  console.log (greet("om"));

//        //array

//       // let number  = [2,3,4,6,7,7];
//       //  for ( let i = 0; i <number.length; i++){
//       //     console.log (number[i]);

//       //  }


//        //tuple 

//         // let employee :[string, number, boolean];
//         //  employee = ["om", 22, true];

//         //   console.log (employee);


//             enum role {
//               ADMIN = "admin",
//                ROLE = "role",
//                 MANAGER = "manager",


             
//            }
//             console.log (role.ADMIN);



 let user : {
   name :  string,
    age : number,
      isStudent : boolean,
      salary: null
 }
 
= {
   name: "om",
    age: 22,
      isStudent: true,
      salary: null
}
 console.log (user);

 
  let skills : string [] = ["JavaScript", "TypeScript", "React"];
      skills.push("Node.js");

  for ( let i = 0; i < skills.length; i++){


     console.log (skills[i]);
}
      console.log (skills[0]);





       let employee : [string, number, boolean];

        employee = ["om", 22, true];
        console.log (employee);
         console.log (employee[0]);