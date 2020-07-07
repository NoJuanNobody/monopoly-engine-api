async function diceRoll({name, position}){
    const roll = Math.round(Math.random()*12);
    console.log(`${name} rolled `, roll);
    return (roll + position)%39;
}

module.exports = diceRoll;