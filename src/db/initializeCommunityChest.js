const properties = require('../public/javascripts/communityChestCards');

async function initializeCommunityChest(db) {
    const communityCards = db.collection('cards');
    const cards = [];
    properties.forEach(({message, amt=0, pos=0},i,a) => {
        cards.push({
            message,
            cardType: 'community',
            amount:amt,
            newPosition:pos,
        })
    });
   await communityCards.insertMany(cards)
};

module.exports = initializeCommunityChest;