  type User   = {
      id : number
       name: string
        email: string
        password : string
          age : number 


  }

      type  UserPreview  =  Pick<User , "name" | "email">

       const  User : UserPreview = {
          name:"johne doe",
           email: "sewrr"
       }
