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

module.exports = GameScript;