var express = require("express");
var router = express.Router();
const {getUserByName, updateUserPosition} = require('../db/db.userServices');
const {getGameSpaceByPosition} = require('../db/db.gameServices')
const { Wallet } = require('../game-utils/buisnessObjects');


async function rollDice(user, args, callback){
    const { res } = args;
    const roll = Math.round(Math.random()*12);
    
    console.log(`${name} rolled `, roll);
    
    let newPosition = (user.position === null) ? 
        roll : 
        user.position+roll
    user.position = newPosition
    await updateUserPosition(user, null, () => {});
    getGameSpaceByPosition(newPosition&39, null, 
        (space) => {
        console.log(`${name} is now at ${newspace.name}`)
        res.send(space);  
        });
}

router.post('/diceRoll', async ({body: { name }},res,next) => {
        //get the same number of spaces
    
    const user = await getUserByName(
        name, {res}, rollDice);
    
    // determine space type
    // retreive game script and related options
    // generate gamescripts for associated space
    // send the roll, position, and generated game scripts
            
 });


router.post('/submitMoves', (req,res,next) => {
    try {
        
    } catch (e) {
        throw e
    }
})

module.exports = router;