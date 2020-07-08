function generatePropertyCardScript(space, args, callback){
    const landed = `you have landed on ${space.name}`;
    const rentOrOwn = space.owner===bank 
    ? `this space is available to own for ${space.value} otherwise you can rent it for ${space.value/4}`
    : `this space is owned by ${space.owner} and you owe them ${space.value/4}`;
    // todo: import gameoptions
    const options = space.owner === bank ? ['pay rent', 'buy space'] : ['pay rent'];
    const script = new Script(
        landed.concat(rentOrOwn),
        'property',
        options,
        space.value
    )
}
//todo : add callbacks like debt credit and audit
module.exports=generatePropertyCardScript