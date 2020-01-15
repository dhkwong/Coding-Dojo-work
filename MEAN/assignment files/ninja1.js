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
    this.showStats = function(){
        console.log(`name: ${this.name}, health: ${this.health}, speed: ${speed}, strength: ${strength}`)

    };
}

var ninja1 = new ninja('ninjaname')
ninja1.showStats()

