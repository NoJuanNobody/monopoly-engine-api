const connect = require('./db.connection');

//buy
//rent
//own
function rent(playerWallet, property){
    const { value, owner } = property;
    const { amount, _id } = playerWallet;
    try {
        connect( async (db) => {
            await db.collection('wallets').updateOne({amount,_id},{$set:{amount: amount+value}}, (err, wallet) => {
                console.log("new wallet amount: ",wallet)
            });
        })

    } catch (error) {
        throw error
    }
}
own(playerWallet, property){
    rent(playerWallet, property);
    playerWallet.properties.push(property);
}
remodel(properties, property){}