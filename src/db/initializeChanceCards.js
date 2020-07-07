const properties = require('../public/javascripts/chanceCards');

async function initializeChance(db) {
    const chanceCards = db.collection('cards');
    const cards = [];
    properties.forEach(({message, amt=0, pos=0},i,a) => {
        cards.push({
            message,
            cardType: "chance",
            amount:amt,
            newPosition:pos,
        })
        
    });
   await chanceCards.insertMany(cards)
};

module.exports = initializeChance;