const connect = require('../db/db.gameServices');
const freeparking= require('../game-utils/gameScripts/freeparking.script');
const property = require('../game-utils/gameScripts/property.script')
const passgo = require('../game-utils/gameScripts/passgo.script')
/**
 * which space
 * @param property - property in which the space is being tested
 * this function acts as a routing utility. each property is identified
 * by type and retrieves necessary libraries to carry out a user turn
 */
const scripts = {
    freeparking, property, passgo
}
 async function whichSpace(space){
     return scripts[space.spacetype](space);
     
 }
 
 module.exports = whichSpace;