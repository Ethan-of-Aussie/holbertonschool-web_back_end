class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name
        this._length = length
        this._students = students
        if (typeof name != String) {
            throw new TypeError('"Name" must be a string')
        }
        if (typeof length != Number) {
            throw new TypeError('"length" must be a number')
        }
        if (typeof students != Array) {
            throw new TypeError('"students" must be a array')
        }
    }
}