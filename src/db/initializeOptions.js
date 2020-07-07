const options = require('../public/javascripts/gameOptions');

async function initializeOptions(db) {
    const gameOptions = db.collection('options');
    const optionsArr = [];
    options.forEach((option,i,a) => {
        optionsArr.push({
            name: option,
            neighbors: [ a[i-1], a[i+1] ],
            spaceno:i,
            owner:'Bank',
            value:(50+Math.random()*50),
            group: 'Pink',
            equity:0,
        })
    });
   await gameOptions.insertMany(optionsArr)
};

module.exports = initializeOptions;