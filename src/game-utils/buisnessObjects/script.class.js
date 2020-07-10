

class Script{
    constructor(message, options, val){
        this.message = message;
        this.options = { ...options };
        this.val = val;
    }
    option(selected){
        this.options[selected]();
    }
    flatten(){
        return this.val;
    }
    
}

modules.exports = Script;