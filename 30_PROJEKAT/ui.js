export class chatUI {
    constructor(l){
        this.list = l;
    }
    set list(l){
        this._list = l;
    }
    get list(){
        return this._list
    }
}