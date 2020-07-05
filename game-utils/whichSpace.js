const connect = require('../db/db.gameServices');
const { 
    generatePropertyCardScript,
    generateCommunityCardScript,
    generateChanceCardScript
 } = require('./db.gameServices');

/**
 * which space
 * @param property - property in which the space is being tested
 * this function acts as a routing utility. each property is identified
 * by type and retrieves necessary libraries to carry out a user turn
 */

 async function whichSpace(space, args={}, callback){
     const { spaceType } = space;
     switch (spaceType) {
        case 'go':
            break
        case 'property':
            generatePropertyCardScript(space, args, callback)
            break
        case'chance':
            generatePropertyCardScript(space, args, callback)
            break
        case 'community':
            generatePropertyCardScript(space, args, callback)
            break
        case 'free':
        case 'jail':
        case 'Railroad':
        case 'Luxury':
        case 'go to jail':
        case 'Water Works':
            break;
     }
 }
 
 module.exports = whichSpace;