class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name
        this._length = length
        this._students = students



    }
    get name() {
        return this._name
    }
    set name() {
        if (typeof name != String) {
        throw new TypeError('"Name" must be a string')
        }   
    }
    get length() {
        return this._length
    }
    set length() {
        if (typeof length != Number) {
        throw new TypeError('"length" must be a number')
    }
    }
    get students() {
        return this._students
    }
    set students() {
        if (typeof students != Array(String)) {
        throw new TypeError('"students" must be a array')
    }
    }
}