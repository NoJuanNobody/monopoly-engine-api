const properties = require('../public/javascripts/properties');

async function initializeGameSpaces(db) {
    try {
        const gameSpaces = db.collection('gameSpaces');
    const spaceArr = [];
    properties.forEach((property,i,a) => {
        spaceArr.push({
            name: property,
            spacetype: determineSpaceFromRegex(property),
            group: determineColorFromRegex(property),
            neighbors: [ a[i-1], a[i+1] ],
            spaceno:i,
            owner:'Bank',
            value:(100+Math.random()*50),
        })
    });
   await gameSpaces.insertMany(spaceArr)
    } catch (error) {
        throw new Error('database is being dropped. restart the server')
    }
};

function determineColorFromRegex(str){
    let selected;
    const patterns = [
        [/Purple/, `Purple`],
        [/Blue/, `Blue`],
        [/White/, `White`],
        [/Pink/, `Pink`],
        [/Orange/, `Orange`],
        [/Red/, `Red`],
        [/Yellow/, `Yellow`],
        [/Green/, `Green`],
        [/Navy/, `Navy`],
        [/Free Parking/,"Free Parking"],
        [/Comunity Chest/,"Comunity Chest"],
        [/Chance/,"Chance"],
        [/Go to Jail/,"Go to Jail"],
        [/Community Chest/,"Community Chest"],
    ];
    patterns.forEach((pattern) => {
        if(pattern[0].test(str)){
            selected =  pattern[1];
        }

    })
    return selected;
}

function determineSpaceFromRegex(str){
    let selected;
    const patterns = [
        [/GO/, 'go'],
        [/\|/, 'property'],
        [/chance/, 'chance' ],
        [/community/, 'community' ],
        [/free/, 'free' ],
        [/jail/, 'jail' ],
        [/Railroad/, 'Railroad' ],
        [/Luxury/, 'Luxury' ],
        [/go to jail/, 'go to jail' ],
        [/Water Works/,  'Water Works'],
    ]
    patterns.forEach((pattern) => {
        if(pattern[0].test(str)){
            selected =  pattern[1];
        }
        
    })
    return selected;
}

module.exports = initializeGameSpaces;