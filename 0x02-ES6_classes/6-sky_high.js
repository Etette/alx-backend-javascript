import Building from './5-building.js';
export default class SkyHighBuilding extends Building{
    constructor(sqft, floors){
        super(sqft);
        this._floors = floors;
    }
   /* get sqft(){
        return this.sqft;
    } */

    get floors() {
        return this._floors;
    }

    evacuationWarningMessage() {
        return `Evacuation slowly the ${this._floors} floors`;
    }
}