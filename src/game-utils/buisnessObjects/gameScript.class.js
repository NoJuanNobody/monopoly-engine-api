class GameScript {
    constructor(scripts){
        this.scripts = scripts;
    }
    
    flatten(){
        return this.scripts.map(script => {
            script.flatten();
        });
    }

    isBankrupt(wallet){
        return wallet.totalAudit() > 0;
    }
}
class GameOption {
    constructor(callback){
        this.callback=callback;
        
    }
    apply(args){
        return this.callback(args);
    }
}

module.exports = GameScript;