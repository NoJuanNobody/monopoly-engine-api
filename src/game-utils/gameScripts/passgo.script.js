const Script = require('../buisnessObjects/script.class');

module.exports = function passGo(space){
    return new Script(
        'you have passed go collect 200',
        ['collect $200'],
        200
    );
}