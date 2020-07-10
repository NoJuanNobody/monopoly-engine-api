var express = require("express");
var router = express.Router();
const {getUserByName, updateUserPosition} = require('../db/db.userServices');
const { getWalletByName } = require('../db/db.walletServices');
const {getGameSpaceByPosition} = require('../db/db.gameServices')
const { Wallet } = require('../game-utils/buisnessObjects');
//  todo: include function to generate game script
const whichSpace = require('../game-utils/whichSpace');
const diceRoll = require('../game-utils/diceRoll');
//move to game utils


router.post('/diceRoll', async ({body: { name }},res,next) => {
    let user = await getUserByName(name);
    const wallet = await getWalletByName(user);
    const position = await diceRoll(user);
    const updatedUser = { ...user, position}
    const space = await getGameSpaceByPosition(position);
    //game Scripts returns a promise <Game script>
    const script = await whichSpace(space);
    // const gameScripts = await generateForm(space);
    user = await updateUserPosition(updatedUser);
    res.send({user, space, script});
 });


// router.post('/submitMoves', (req,res,next) => {
//     const user = await getUserByName(name);
//     const wallet = await getWalletByName(user);
//     const {gameScripts: transactions} = req.body;
//     const {cash, properties, token} = transactions.flatten();
//     wallet.applyCash(cash);
//     wallet.applyProperties(properties);
//     wallet.applyToken(token);
//     await updateWalletForUser(newWallet);
// })

module.exports = router;