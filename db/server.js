const initializeGameSpaces = require('./initializeGameSpaces');
const initializeOptions = require('./initializeOptions');
const initializeCommunityChest = require('./initializeCommunityChest');
const initializeChanceCards = require('./initializeChanceCards');
const connect = connectAndInvokeCallback = require('./db.connection');

async function initdb(){
  await connect(async (db) => {
    console.log('initializing Libraries')
    await initializeGameSpaces(db);
    console.log( 'Loading GameSpaces');
    await initializeCommunityChest(db);
    console.log( 'Loading CommunityChest');
    await initializeChanceCards(db); 
    console.log( 'Loading Chance Cards');
    await initializeOptions(db);
    console.log( 'Loading Options');
    // perform actions on the collection object
    console.info("closing connection, libraries initialized!")
    console.info("to start playing a game send me a message on https://localhost:3000/users/new !")
  })
}

async function drop(){
  await connect(async (db) => {
    await db.dropDatabase(() => {});
  })
}

module.exports = {
    initdb,
    drop
}