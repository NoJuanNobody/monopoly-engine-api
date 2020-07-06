const initializeGameSpaces = require('./initializeGameSpaces');
const initializeOptions = require('./initializeOptions');
const initializeCommunityChest = require('./initializeCommunityChest');
const initializeChanceCards = require('./initializeChanceCards');
const connect = connectAndInvokeCallback = require('./db.connection');

async function initdb(){
  const db = await connect();
  
  await initializeGameSpaces(db).then(() => console.log('initializing Libraries'));
  await initializeCommunityChest(db).then(() => console.log( 'Loading GameSpaces'));
  await initializeChanceCards(db).then(() => console.log( 'Loading CommunityChest')); 
  await initializeOptions(db).then(() => console.log( 'Loading Chance Cards'));
  console.log( 'Loading Options');
  // perform actions on the collection object
  console.info("closing connection, libraries initialized!")
  console.info("to start playing a game send me a message on https://localhost:3000/users/new !")
}

async function drop(){
  const db = await connect();
  await db.dropDatabase();
}

module.exports = {
    initdb,
    drop
}