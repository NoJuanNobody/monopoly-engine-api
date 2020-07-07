const connect = require('./db.connection');

//get user by name
async function getGameSpaceByPosition(position){
    const db = await connect();
    return await db.collection('gameSpaces').findOne({spaceno: position%39})
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
// generate property card scripts 
// TODO: move to game utilities folder 
function generatePropertyCardScript(space, args, callback){
    const landed = `you have landed on ${space.name}`;
    const rentOrOwn = space.owner===bank 
    ? `this space is available to own for ${space.value} otherwise you can rent it for ${space.value/4}`
    : `this space is owned by ${space.owner} and you owe them ${space.value/4}`;
    const options = space.owner === bank ? ['pay rent', 'buy space'] : ['pay rent'];
    const script = new Script(
        landed.concat(rentOrOwn),
        'property',
        options,
        space.value
    )
}


const spaceTypes = [

    //UPDATES POSITIONN
    'jail',
    'gotojail',
    
    //UPDATES WALLET
    'luxury tax',
    'go',
    
    //NOTHING
    'freeparking',
    
    // POSITION AND wallet  
    'property space',
    'railroad',
    'chance',
    'community chest',
]

// class Gameboard
module.exports = {
    getGameSpaceByPosition,
    generatePropertyCardScript,
}

    
