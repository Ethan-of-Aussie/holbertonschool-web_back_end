export default class Currancy {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
    get code() {
        return this._code;
    }
    set code(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Code not a String');
        }
        this._code = value;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name not a String');
        }
        this._name = value;
    }
    /**
     * 
     */
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}