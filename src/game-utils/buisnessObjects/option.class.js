class GameOption {
    constructor(callback){
        this.callback=callback;
        
    }
    apply(args){
        return this.callback(args);
    }
}

module.exports = GameOption;