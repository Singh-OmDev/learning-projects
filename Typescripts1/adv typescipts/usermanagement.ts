type User = {
     id: number;
      name: string;
      email: string;

}

 const user : User  [] = [
     {
         id: 1,
         name: "John Doe",
         email: "john.doe@example.com"
     },
      {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com"
      },
       {
         id: 3,
         name: "Bob Johnson",
         email: "bob.johnson@example.com"
       },


      
 ]



function addUser(newUser: User) :void {
    user.push(newUser);
}
 addUser({
     id:3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
 })

  function getUser(): User[]{
     return user;


  }
   console.log (getUser ());


    function getUserById(id: number): User | undefined{
        return user .find((user) => user.id === id);


    }