const connect = require('./db.connection');

//get user by name
async function getGameSpaceByPosition(position){
    const db = await connect();
    // const length = await db.collection('gameSpaces').find({}).toArray().length;
    const space = await db.collection('gameSpaces').findOne({spaceno: position%9});
    return space;
}

// generate chance card script
function getChanceCard(args, callback){
    db.collection('chance').findOne({}, (err, card) => {
        if(err) throw err;
        callback({card, ...args})
    })
}
// generate community card script
function getCommunityCard(args, callback){
    db.collection('community').findOne({}, (err, card) => {
        if(err) throw err;
        callback({card, ...args})
    })
}

// class Gameboard
module.exports = {
    getGameSpaceByPosition,
}

    
