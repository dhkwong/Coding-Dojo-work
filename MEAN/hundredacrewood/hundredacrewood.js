class character {

    constructor(north = null, northeast = null, east = null, southeast = null, southwest = null, west = null, northwest = null, ) {
        this.northeast = northeast
        this.east = east
        this.southeast = southeast
        this.southwest = southwest
        this.west = west
        this.northwest = northwest
    }
}

character.east = 10

console.log(character.east)