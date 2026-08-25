export default class Airport{
    constructor(name = 'San Francisco Airport', code = 'SFO'){
        this._name = name
        this._code = code
    }
    
    get [Symbol.toStringTag]() {
        return "Airport";
    }

}