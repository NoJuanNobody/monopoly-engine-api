const { isValidObjectId } = require("mongoose");

/* TODO: user currently needs a service that keeps track of monopoly resources per user
at any time in the game, a user should be able to access
cash wallet id,
property wallet id,
gameboard position
*/

/**
 * a wallet essentially keeps track of different types fo values that can be reduced to ingame currency
 */
 class Wallet extends Object{
    constructor({name, _id}){
        super()
        this.id = _id
        this.owner = name;
        this.amount=1000;
        this.tokens=[]       
        this.properties = [];
    }
    sumContents(contents){
        contents.reduce((tot,c) => {
            let {val:cumVal} = comVal;
            let {val} = c;
            return cumVal+val;
        },0);
    }
    totalAudit(){
        return this.amount + this.sumContents(this.properties) + this.sumContents(this.tokens);
    }
    /**
     * transaction updates the cash amount in a user wallet after the transaction
     * @param {number} amount - typically a negative number 
     */
    applyCash(amount){
        this.amount += amount;
        return this.amount;
    }
    applyProperty(property, type){
        let index = this.properties.indexOf(property)
        
        switch (type) {
            case 'add':
                this.properties.push(property);
                break;
            default:
                this.properties.splice(index,1);
                break;
        }
    }
    applyProperties(properties, type){
        const nonempty = this.properties.length > 0;
        if(nonempty){
            properties.forEach((property) => {
                this.applyProperty(property, type);
            });
        }
    }
    applyToken(token){
        this.tokens.push(token)        
    }
}

 class Token extends Object{

}

class JailToken extends Token{
    constructor(){
        this.message ="get out of jail free"
        this.isValid = true;
        this.injail = false;
    }

    use(){
        this.injail = true;
        this.isValid = false;
    }
}

module.exports = {
    JailToken,
    Wallet
}

