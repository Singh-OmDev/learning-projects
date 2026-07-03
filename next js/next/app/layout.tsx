import  type {ReactNode} from 'react';

 export default function RootLayout({children}: {children: ReactNode}) {
   return (
     <html lang="en">
       <head />


       <title>Next.js App </title>

       <body>
        <header style={{ backgroundColor: "lightgray", padding: "1rem" }}>
           
          
           my navbar
           <nav style={{ backgroundColor: "gray", padding: "1rem" }} >
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>  
             <a href="/dashboard"> dashboard</a>

            
             my nav</nav>
           
           </header>
         {children  }
          <footer style={{ backgroundColor: "lightgray", padding: "1rem" }} > my footer</footer>




       </body>
     </html>
   );
 }  

