class Deck {
    constructor(){
        this.deck = [];
        
    }
/*create a deck that consists of an array of 52 objects that each have 2
key:value pairs consisting of name and value.*/ 
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
/* Shuffle the deck swapping the card at index i with a card at another index
 chosen randomly by math.random*/
    shuffleDeck(){
        for(let i = 0; i < this.deck.length; i++){
            let tempCard = this.deck[i];
            let randomCard = Math.floor(Math.random()*52);
            this.deck[i] = this.deck[randomCard];
            this.deck[randomCard] = tempCard;
        } 
        //console.log(this.deck);
    }  
    
}

class Players {
    constructor(){
        this.playerDeck = new Deck;
        this.player1Hand = [];
        this.player2Hand = [];
        this.player1Score = 0;
        this.player2Score = 0;
    }
    /* I wanted to create a method that contained the 2 methods from the 
    Deck class, that way I would only need to instantiate the Player class inside
    the Game class and not the Player and Deck classes*/
    setUp(){
        this.playerDeck.createDeck();        
        this.playerDeck.shuffleDeck();
        
    }

    /* deal 26 cards to each of the players by using a loop and for each iteration,
    popping the top card off the deck and pushing it into player 1's hand and 
    then doing the same for player2. */
    dealHand(){
        for(let i = 0; i < 26; i++){
            this.player1Hand.push(this.playerDeck.deck.pop());
            this.player2Hand.push(this.playerDeck.deck.pop());
        }
        //console.log(this.player1Hand);
        //console.log(this.player2Hand);
    }
    
    
}

class Game{
    constructor(){
        this.gamePlayer = new Players
    }
/* play a round of War by removing one card from each players hand and comparing the
values of those cards. Value comes from the key:value pairs created in the Deck class.
Depending on who has the higher card value for each round a point is awarded. In the case of a 
tie, no points are awarded and the score remains the same.*/
    playRound(){    
        let player1Card  
        let player2Card 
        console.log(`Shall we play a game?`)
        for(let i = 0; i < 26; i++){
             player1Card = this.gamePlayer.player1Hand.pop();
             player2Card = this.gamePlayer.player2Hand.pop();
            console.log(`Player 1 plays: ${player1Card.name}` + "\n" +
                        `Player 2 plays: ${player2Card.name}`)
            if(player1Card.value > player2Card.value){
                this.gamePlayer.player1Score += 1;
                //console.log(`The current score is P1: ${player1Score} P2: ${player2Score}`)
            } else if (player2Card.value > player1Card.value){
                this.gamePlayer.player2Score +=1;
                //console.log(`The current score is P1: ${player1Score} P2: ${player2Score}`)
            } else {
                this.gamePlayer.player1Score +=0;
                this.gamePlayer.player2Score +=0;
                
            }
            console.log(`The current score is P1: ${this.gamePlayer.player1Score} P2: ${this.gamePlayer.player2Score}`)
            
        }
        console.log(`The final score is P1: ${this.gamePlayer.player1Score} P2: ${this.gamePlayer.player2Score}`)
    }
    /* Using the scores generated in the playRound method, declare a winner by determining
    who has the higher score or declare a tie in the case that neither side has a higher score.*/
    declareWinner(){
        if(this.gamePlayer.player1Score > this.gamePlayer.player2Score){
            console.log(`Congratulations Player 1, YOU WIN!`);
        } else if (this.gamePlayer.player2Score > this.gamePlayer.player1Score){
            console.log(`Congratulations Player 2, YOU WIN!`);
        } else {
            console.log(`It's a tie! Now, how about a nice game of chess?`);
        }
    }
/* put all the methods together so that only one needs to be called to run a game.*/
    playGame(){
        this.gamePlayer.setUp();
        this.gamePlayer.dealHand();
        this.playRound(this.player1Hand, this.player2Hand);
        this.declareWinner(this.player1Score, this.player2Score);  

    }

}

let test = new Game;
//test.setUp();
//test.dealHand();
//test.playRound();
//test.declareWinner();
test.playGame();


