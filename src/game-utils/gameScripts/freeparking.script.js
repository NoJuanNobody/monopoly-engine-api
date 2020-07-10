const { Script } = require('../buisnessObjects')


module.exports = function freeParking(space){
    const script = new Script(
        'You have landed on Free parking',
        ['ok'],
        0
    )
    
    return script;
}