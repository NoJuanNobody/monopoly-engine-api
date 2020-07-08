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

module.exports = JailToken;