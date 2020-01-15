function ninja(Name) {
    var speed = 3
    var strength = 3
    this.health = 100
    this.name = Name;
    this.drinksake = function () {
        console.log('health+10');
        health += 10;
    };
    this.sayname = function () {
        console.log(name);
        health += 10;
    };
    this.showStats = function () {
        console.log(`name: ${this.name}, health: ${this.health}, speed: ${speed}, strength: ${strength}`)

    };
    this.punch = function (ninja2) {
        if (ninja2 instanceof ninja == true) {
            ninja2.health -= 5
            console.log(`${this.name} punched ${ninja2.name} and lost 5 health`)
        }
        else {
            console.log("not a ninja")
        }

    }
    this.kick = function (ninja2) {
        
        if (ninja2 instanceof ninja == true) {
            ninja2.health -= 15*strength
            console.log(`${this.name} kicked ${ninja2.name} and lost ${strength*15}`)
            console.log(ninja2.health)
        }
        else {
            console.log("not a ninja")
        }


    }
}

var ninja1 = new ninja('ninjaname')
var bob = new ninja('bob')
var str = ""
ninja1.kick(bob)


