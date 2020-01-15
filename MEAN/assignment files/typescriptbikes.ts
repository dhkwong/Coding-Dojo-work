class bike {
    constructor(public wheels: number){}
    speed =() =>{
 
       this.wheels*2;
    }
    ride(){
         console.log("I'm going "+this.speed+" fast");
     }
 }
 var bike1 = new bike(2);
 var bike2 = new bike(3);
 var bike3 = new bike(4);
 bike1.ride();
 bike2.ride();
 bike3.ride();
 