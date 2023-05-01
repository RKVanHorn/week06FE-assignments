//Classes: Player?, Deck?, Play?


//Players would need an array for their hand

/*Deck needs to
1.Create a deck
2.Shuffle deck*/

/*Play needs to
1. Deal cards to each player
2. Compare each round to see whose card is higher
3. Assign points based off who wins each round
4. Add points up for each player
5. Declare a winner*/

// array1 = ['banana', 2, 3, 4, 5];
// array2 = [];
// array2.push(array1.pop());
// console.log(array2); this works for dealing cards from one deck into player 1 and 2 hands

class Deck {
    constructor(){
        this.deck = [];
        this.player1Hand = [];
        this.player2Hand = [];
        this.player1Score = 0;
        this.player2Score = 0;
    }

    createDeck(){
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
        for(let suitName of suits){
            for (let cardValue of values){
                this.deck.push({
                    name: `${cardValue} of ${suitName}`,
                    value: values.indexOf(cardValue)
                });
            }
        }
        //console.log(this.deck);

    }

    shuffleDeck(){
        for(let i = 0; i < this.deck.length; i++){
            let tempCard = this.deck[i];
            let randomCard = Math.floor(Math.random()*52);
            this.deck[i] = this.deck[randomCard];
            this.deck[randomCard] = tempCard;
        } 
        //console.log(this.deck);
    }

    dealHand(){
        for(let i = 0; i < 26; i++){
            this.player1Hand.push(this.deck.pop());
            this.player2Hand.push(this.deck.pop());
        }
        //console.log(this.player1Hand);
        //console.log(this.player2Hand);
    }


    playRound(){    
        let player1Card  
        let player2Card 
        for(let i = 0; i < 26; i++){
             player1Card = this.player1Hand.pop();
             player2Card = this.player2Hand.pop();
            console.log(`Player 1 card: ${player1Card.name}` + "\n" +
                        `Player 2 card: ${player2Card.name}`)
            if(player1Card.value > player2Card.value){
                this.player1Score += 1;
                //console.log(`The current score is P1: ${player1Score} P2: ${player2Score}`)
            } else if (player2Card.value > player1Card.value){
                this.player2Score +=1;
                //console.log(`The current score is P1: ${player1Score} P2: ${player2Score}`)
            } else {
                this.player1Score +=0;
                this.player2Score +=0;
                
            }
            console.log(`The current score is P1: ${this.player1Score} P2: ${this.player2Score}`)
            
            
            //.pop from each playerHand - into a holding variable?
            //compare values - is that this.player1Hand.value?
            //create player point counters
            //if player1 value > player2 value player1Score +=1
            //if player2 value > player 1 value player2Score +=1
            //if player1 value == player 2 value both Score +=0
            //print out playerScore for each round
        }
    }

    declareWinner(){
        if(this.player1Score > this.player2Score){
            console.log(`Congratulations Player 1, YOU WIN!`);
        } else if (this.player2Score > this.player1Score){
            console.log(`Congratulations Player 2, YOU WIN!`);
        } else {
            console.log(`It's a tie! Want to play again?`);
        }
    }

    playGame(){
        this.createDeck();
        this.shuffleDeck();
        this.dealHand();
        this.playRound(this.player1Hand, this.player2Hand);
        this.declareWinner(this.player1Score, this.player2Score);  

    }
}

let deck1 = new Deck;
deck1.playGame();



