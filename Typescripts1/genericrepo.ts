interface User {
     id: number;
      name : string;

}

 class Repository <T> {

     private items : T [] = [];


     add (item: T){
         this.items.push ( item);

     }
     getAll (): T [] {
         return this.items;

     }
 }

  const userRepo = new Repository <User >  ();
   


    userRepo .add ({
         id: 1,
          name: "John Doe"
    })

    console.log(userRepo.getAll());