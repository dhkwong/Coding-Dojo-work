class Card {

    constructor(suit, value, svalue) {
        this.suit = suit;
        this.value = value;
        this.svalue = svalue;
    }
    show() {
        console.log(`Suit: ${this.value}`)
    }
}

class Deck {
    constructor() {
        this.deck = []
        this.reset()
        this.shuffle(this.deck)
    }
    shuffle(deck) {
        var m = deck.length, t, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = deck[m];
            deck[m] = deck[i];
            deck[i] = t;
        }
        return deck;
    }
    deal() {
        return (this.deck.pop())
    }
    reset() {
        this.deck = []
        console.log(this.deck)
        var suit = ["Diamond", "Club", "Heart", "Spade"]
        var value = {
            1: "Ace",
            2: "Two",
            3: "Three",
            4: "Four",
            5: "Five",
            6: "Six",
            7: "Seven",
            8: "Eight",
            9: "Nine",
            10: "Ten",
            11: "Jack",
            12: "Queen",
            13: "King"
        }
        for (let suits in suit) {
            for (let values in value) {
                this.deck.push(new Card(suit[suits], values, value[values]));
            }
        }
        console.log(this.deck)
    }
}

class Player {
    constructor(name, deck) {
        this.name = name;
        this.hand = [];
        for (var i = 0; i < 5; i++) { //automatically draws 5 cards from the deck
            this.hand.push(deck.deck.pop());
        }
    }
    showhand() {
        for(var x in this.hand){
            console.log(this.hand[x])
        }
        // console.log(this.hand); <-works too
    }
    draw() {
        this.hand.push(deck.deal())
    }
    discard(){
        this.hand.pop()
    }
}

// let deck1 = new Deck();

// let player1 = new Player('player1', deck1);

// console.log(player1.showhand())
//console.log(player1.draw());

// console.log(deck1.shuffle(deck1))


