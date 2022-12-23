export default class HolbertonClass {
    constructor (size, location) {
        this._size = size;
        this._location = location;
    }

    /*using methos
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') return this._size;
        if (hint === 'string') return this._location;
        return this;
    } */
    toString() {
        return this._location;
    }

    valueOf() {
        return this._size;
    }
}