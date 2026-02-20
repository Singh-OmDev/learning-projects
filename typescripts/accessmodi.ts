//public class ko hum kahi bhi access kr skte hai lekin private class ko bs usi class mai access kr skte hai 

class BottlMaker {


     public snap:string = "snap";

      constructor(public name: string){

         
      }
       class MetalBottleMaker extends BottlMaker{

         constructor (name: string){

             super (name);


         }
          getValue (){
             console.log (this.name, this .snap)
;

}
       }

        let b1 = new MetalBottleMaker("cc");
         b1.getValue();
}