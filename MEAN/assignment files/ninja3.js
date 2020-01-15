
class Ninja {

    constructor(name) {
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
        sayname(){
            console.log(this.name)
        }
        showStats(){
            console.log(`name: ${this.name}, health: ${this.health}, speed: ${this.speed}, strength: ${this.strength}`)
        }
        drinkSake(){
            console.log('health+10');
            this.health += 10;
        }
        punch(ninja){
            if(ninja instanceof Ninja == true){
                ninja.health-=5;
                console.log(`${this.name} punched ${ninja.name} and lost 5 health`)
                
            }
        }
        kick(ninja){
            if(ninja instanceof Ninja == true){
                console.log(ninja.health-=15*this.strength);
                console.log(`${this.name} kicked ${ninja.name} and lost ${this.strength*15} health`)
                
            }
        }
    }


class Sensei extends Ninja {
    constructor(Name, wisdom){
    super(Name);
    this.speed = 10;
    this.strength = 10;
    this.health = 200;
    this.name = Name;
    this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


var ninja1 = new Ninja('ninjaname');
var bob = new Ninja('bob')
var sensei = new Sensei('Imasensei')
ninja1.showStats()
ninja1.punch(bob)
ninja1.kick(bob)
sensei.kick(ninja1)
sensei.speakWisdom()



