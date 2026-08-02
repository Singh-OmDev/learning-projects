interface ApiResponse <T> {
     success: boolean;
     data: T;

}

 const userResponse : ApiResponse <{name: string ;  age: number} = {
     
     success:  true,
      data: {
         name:  "om",
          age: 22

      }
 } ;

  console.log  (userResponse);
