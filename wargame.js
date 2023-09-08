const suits = ['H','C','D','S'];
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length
    }

    shuffle() {
        for(let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function freshDeck() {
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value)
        })
    })
}

function startNewGame() {
    const myDeck = new Deck();
    myDeck.shuffle();
    return myDeck; 
}

const gameDeck = startNewGame();
console.log(gameDeck.cards);

function refreshPage(){
    const refreshedDeck = startNewGame();
}


const player1 = [];
const player2 = [];

const numberOfCardsPerPlayer = gameDeck.numberOfCards / 2;
for(let i = 0; i < numberOfCardsPerPlayer; i++) {
    player1.push(gameDeck.cards.pop());
}

for(let i = 0; i < numberOfCardsPerPlayer; i++) {
    player2.push(gameDeck.cards.pop());
}

console.log(player1);
console.log(player2);

let player1Score = 0;
let player2Score = 0;

let numberOfTurns = 0;
const maxTurns = 52;

while(player1.length > 0 && player2.length > 0 && numberOfTurns < maxTurns) {
    const card1 = player1.pop();
    const card2 = player2.pop();
    if(card1.value > card2.value) {
        console.log('Player 1 wins the round!');
        player1.push(card1, card2);
        player1Score++;
    }else if(card1.value < card2.value) {
        console.log('Player 2 wins the round!');
        player2.push(card1, card2);
        player2Score++;
    }else {
        console.log('It\'s a tie!');
    }
    numberOfTurns++;
}

console.log(`Player 1's Score: ${player1Score}`);
console.log(`Player 2's Score: ${player2Score}`);
if(player1Score > player2Score){
    console.log('Player 1 is the winner!');
}else if(player1Score < player2Score){
    console.log('Player 2 is the winner!');
}else {
    console.log('It\'s a tie!');
}