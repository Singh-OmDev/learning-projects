import { useState } from "react";

function App() {
  // your code here
 const [count , setCount] = useState(0);


 
  const increment = () => {
     setCount(prev=> prev +1);
      if (count >=10){
         setCount (10);
         
      }


  }
   const decrement = ()=> {
     setCount(prev=> prev -1);

      if (count <=0){
         setCount(0);

      }

   }
  


  return (
    <div>
      <h1>Count: {count}</h1>
      
      <button onClick={increment}> +</button>
      <button onClick={decrement} > - </button>
       
    </div>
  );
}

export default App;