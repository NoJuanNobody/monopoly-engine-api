const connect = require('../db/db.gameServices');
const freeparking= require('../game-utils/gameScripts/freeparking.script');

/**
 * which space
 * @param property - property in which the space is being tested
 * this function acts as a routing utility. each property is identified
 * by type and retrieves necessary libraries to carry out a user turn
 */

 async function whichSpace(space, args={}, callback){
     return freeparking();
     
 }
 
 module.exports = whichSpace;