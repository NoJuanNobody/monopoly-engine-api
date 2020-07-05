const connect = require('./db.connection');
const { Wallet } = require('../game-utils/buisnessObjects');

async function createNewWallet({name}){
    await connect(async (db) => {
        let wallet = new Wallet(name);
        await db.collection('wallets').insertOne(wallet);
    }).then((client) => {
            console.log("1 wallet updated");
    });
}

module.exports = {
    createNewWallet,
}