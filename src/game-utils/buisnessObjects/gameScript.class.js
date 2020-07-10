class GameScript {
    constructor(scripts, wallet){
        this.scripts = scripts;
        this.wallet = wallet;
    }
    
    flatten(){
        const cash = this.scripts.reduce((total,script) => {
            return total + script.flatten();
        },0);
        this.wallet.applyCash(cash);
        return this.willBeBroke();
    }

    willBeBroke(wallet){
        return this.allet.totalAudit() > 0;
    }
}

module.exports = GameScript;