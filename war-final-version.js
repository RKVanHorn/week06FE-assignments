class Deck {
    constructor(){
        this.deck = [];
        
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
        console.log(this.deck);

    }

    shuffleDeck(){
        for(let i = 0; i < this.deck.length; i++){
            let tempCard = this.deck[i];
            let randomCard = Math.floor(Math.random()*52);
            this.deck[i] = this.deck[randomCard];
            this.deck[randomCard] = tempCard;
        } 
        console.log(this.deck);
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
    setUp(){
        this.playerDeck.createDeck();        
        this.playerDeck.shuffleDeck();
        
    }
    dealHand(){
        for(let i = 0; i < 26; i++){
            this.player1Hand.push(this.playerDeck.deck.pop());
            this.player2Hand.push(this.playerDeck.deck.pop());
        }
        console.log(this.player1Hand);
        console.log(this.player2Hand);
    }
    
    
}

class Game{
    constructor(){
        this.gamePlayer = new Players
    }

    playRound(){    
        let player1Card  
        let player2Card 
        for(let i = 0; i < 26; i++){
             player1Card = this.gamePlayer.player1Hand.pop();
             player2Card = this.gamePlayer.player2Hand.pop();
            console.log(`Player 1 card: ${player1Card.name}` + "\n" +
                        `Player 2 card: ${player2Card.name}`)
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
    }
    declareWinner(){
        if(this.gamePlayer.player1Score > this.gamePlayer.player2Score){
            console.log(`Congratulations Player 1, YOU WIN!`);
        } else if (this.gamePlayer.player2Score > this.gamePlayer.player1Score){
            console.log(`Congratulations Player 2, YOU WIN!`);
        } else {
            console.log(`It's a tie! Want to play again?`);
        }
    }

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


