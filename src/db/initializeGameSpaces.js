const properties = require('../public/javascripts/properties');

async function initializeGameSpaces(db) {
    try {
        const gameSpaces = db.collection('gameSpaces');
    const spaceArr = [];
    properties.forEach((property,i) => {
        const { name, spacetype, color} = property
        spaceArr.push({
            ...property,
            group: color ? color : null,
            spaceno:i,
            owner:'bank',
        })
    });
   await gameSpaces.insertMany(spaceArr)
    } catch (error) {
        throw new Error('database is being dropped. restart the server')
    }
};

module.exports = initializeGameSpaces;