 function  myPromiseAll ( promises){
     return new Promise((resolve , reject)=> {
          const results = [];
           let completed  = 0;
             
            promises.forEach (promise ).then (result => {
                 results .push ( result)
                  completed += 1;

                   if  ( completed === promises.length ) resolve ( results)
            })
         .catch (reject)
     })
 }