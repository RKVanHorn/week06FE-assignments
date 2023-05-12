const expect = chai.expect
const assert = chai.assert

describe('Week 6 Final Project Unit Test', () => {
    describe('Test create deck method', () => {
        class Deck {
            constructor(){
                this.deck = [];
                
            }
        
            createDeck(){
                const suits = ['♥', '♦', '♣', '♠'];
                const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
                for(let suitName of suits){
                    for (let cardValue of values){
                        this.deck.push({
                            name: `${cardValue} of ${suitName}`,
                            value: values.indexOf(cardValue)
                        });
                    }
                }
                       
            }}

        let deck1 = new Deck;
        deck1.createDeck();

        it('#Should create an array with 52 cards', () => {
            expect(deck1.deck.length).to.equal(52)
        })
    })
})