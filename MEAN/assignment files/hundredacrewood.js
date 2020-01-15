class character {

    constructor(name, north = null, east = null, west = null, south = null) {
        this.name = name
        this.north = north
        this.east = east
        this.west = west
        this.south = south
    }
}

module.exports.character = character

var tigger = new character('tigger')
var winniethepooh = new character('winnie the pooh')
var bees = new character('bees')
var piglet = new character('piglet')
var owl = new character('owl')
var christopherrobin = new character('christopher robin')
var rabbit = new character('rabbit')
var gopher = new character('gopher')
var kanga = new character('kanga')
var eeyore = new character('eeyore')
var heffalumps = new character('heffalumps')

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
    location: tigger
}
function move(direction) {
    if (direction == 'north') {
        if (player.location.north == null) {
            console.log("you can't go this direction")
        }
        else {
            player.location = player.location.north
            console.log(`you are now at ${player.location.name} 's house`);
        }
    }
    if (direction == 'south') {
        if (player.location.south == null) {
            console.log("you can't go this direction")
        }
        else {
            player.location = player.location.south
            console.log(`you are now at ${player.location.name} 's house`);
        }
    }
    if (direction == 'east') {
        if (player.location.east == null) {
            console.log("you can't go this direction")
        }
        else {
            player.location = player.location.east
            console.log(`you are now at ${player.location.name} 's house`);
        }
    }
    if (direction == 'west') {
        if (player.location.west == null) {
            console.log("you can't go this direction")
        }
        else {
        player.location = player.location.west
            console.log(`you are now at ${player.location.name} 's house`);
        }
    }
}

move('north')
move('north')
move('east')
move('west')
move('south')
move('south')
move('south')


