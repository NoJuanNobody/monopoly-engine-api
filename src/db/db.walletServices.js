const connect = require('./db.connection');
const Wallet = require('../game-utils/buisnessObjects/wallet.class');

async function createNewWallet({name, _id}){
    try {
        const wallet = new Wallet(name, _id);
        const db = await connect();

        const { ops: record } = await db.collection('wallets').insertOne(wallet);
        return await db.collection('wallets').findOne(record[0]);
    } catch (error) {
        throw new Error("looks like something happened while creating a wallet")
    }
}

async function getWalletByName({name, _id}){
    try {
        const db =  await connect();
        return await db.collection('wallets').findOne({name});

    } catch (error) {
        throw error
    }
}

module.exports = {
    createNewWallet,
    getWalletByName
}