export default class Airport {
    constructor (name, code){
        this._name = name;
        this._code =  code;
    }
    //default string should return airport code
}
Airport.prototype.toString = function airportToString() {
    return `[object ${this._code}]`;
};