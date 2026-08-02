  class RateLimiter {
     Constructor ( limit , windowMs){
         this.limit  = limit;
          this.windowMs = windowMs;
           this.map = new Map ();


     }

        allow  ( user){
             const now = Date.now ();

              //get previous requests timestamps for the user
               const arr =  this.map.get ( user) || [];
                //remove old timestamps  outside the window 

                 while  ( arr.length  && now -arr [0] > this.windowMs){
                     arr.shift ();

                 }
                  //allow  request if limit is not reached 
                   
                   if ( arr.length  < this.limit){
                     arr.push ( now);
                    this.map.set (user, arr);
                     return true;

                   }
                    return false;
                    

               
        }
  }
