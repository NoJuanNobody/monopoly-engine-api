const Script = require('../buisnessObjects/script.class');

function generatePropertyCardScript(space){
    const landed = `you have landed on ${space.name}`;
    const rentOrOwn = space.owner==='bank' 
    ? `this space is available to own for ${space.rent} otherwise you can rent it for ${space.rent}`
    : `this space is owned by ${space.owner} and you owe them ${space.rent}`;
    // todo: import gameoptions
    const options = space.owner === 'bank' ? ['pay rent', 'buy space'] : ['pay rent'];
    return new Script(
        landed.concat(rentOrOwn),
        options,
        space.value
    )
    
}
//todo : add callbacks like debt credit and audit
module.exports=generatePropertyCardScript