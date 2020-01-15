class character {

    constructor(name, message, north = null, east = null, west = null, south = null) {
        this.name = name
        this.message = message
        // this.message = message
        this.greet = function(){
            console.log(this.message)
        }
        this.north = north
        this.east = east
        this.west = west
        this.south = south
    }
// function greet(){
//         console.log(this.message)

//     }
// character.prototype.message = function(){
//     console.log(this.message)
// }
    

}



var tigger = new character('tigger', "the wonderful thing about tiggers is Tiggers are wonderful things")
var winniethepooh = new character('winnie the pooh', 'oh bother')
var bees = new character('bees', "bzzz")
var piglet = new character('piglet',"piglet message")
var owl = new character('owl',"owl message")
var christopherrobin = new character('christopher robin', "christopher robin message")
var rabbit = new character('rabbit', 'rabbit message')
var gopher = new character('gopher', 'gopher message')
var kanga = new character('kanga','kanga message')
var eeyore = new character('eeyore', 'eeyore message')
var heffalumps = new character('heffalumps', 'heffalumps message')

tigger.north = winniethepooh
winniethepooh.south = tigger
winniethepooh.east = bees
winniethepooh.west = piglet
winniethepooh.north = christopherrobin
bees.north = rabbit
bees.west = winniethepooh
piglet.east = winniethepooh
piglet.north = owl
owl.south = piglet
owl.east = christopherrobin
christopherrobin.south = winniethepooh
christopherrobin.east = rabbit
christopherrobin.west = owl
christopherrobin.north = kanga
rabbit.west = christopherrobin
rabbit.south = bees
rabbit.east = gopher
gopher.west = rabbit
kanga.south = christopherrobin
kanga.north = eeyore
eeyore.south = kanga
eeyore.east = heffalumps
heffalumps.west = eeyore


var player = {
    location: tigger,
    honey :false
}
function move(direction) {
    if (direction == 'north') {
        if (player.location.north == null) {
            console.log("you can't go this direction")
        }
        else {
            player.location = player.location.north
            console.log(`you are now at ${player.location.name} 's house`);
            player.location.greet()

        }
    }
    if (direction == 'south') {
        if (player.location.south == null) {
            console.log("you can't go this direction")
        }
        else {
            player.location = player.location.south
            console.log(`you are now at ${player.location.name} 's house`);
            player.location.greet()
        }
    }
    if (direction == 'east') {
        if (player.location.east == null) {
            console.log("you can't go this direction")
        }
        else {
            player.location = player.location.east
            console.log(`you are now at ${player.location.name} 's house`);
            player.location.greet()
        }
    }
    if (direction == 'west') {
        if (player.location.west == null) {
            console.log("you can't go this direction")
        }
        else {
            player.location = player.location.west
            console.log(`you are now at ${player.location.name} 's house`);
            player.location.greet()
        }
    }
}
function pickup(){
    if(player.honey == false && player.location.name == 'bees'){
        player.honey = true
        console.log("you've picked up some honey!")
    }
    else if(player.location !== 'bees' && player.honey == true){
        console.log("you have the honey already! Go to Pooh!")
    }
    else if(player.location!== 'bees' && player.honey == false){
        console.log('you need to travel to the bees for the honey')
    }
}
function drop(){
    if(player.honey == true && player.location.name == 'winnie the pooh'){
        player.honey = false
        console.log('congratulations!')
    }
}
console.log("go to the bees, pick up the honey, and drop it off at pooh's")
move('north')
pickup()
move('east')
pickup()
move('west')
pickup()
drop()
