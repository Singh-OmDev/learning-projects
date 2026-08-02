 

  async  function PromisePool ( promise , concurrency){
     for  ( let i = 0;  i<Promise.length; i+=concurrency){
        const batch = Promise.slice (i  , i+concurrency);

          try {
             const response = await Promise.all ( batch)
              console.log ( response)
               
          }
            catch ( error ){
                  console.log ( error)
            }
     }
  }

   const  Promise = [new Promise (1), new Promise (2)]
    PromisePool ( Promise ,1 );