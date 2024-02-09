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
    formatDate = (date) => `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}. ${date.getHours()}:${date.getMinutes()}`

    tamplateLI(dt){
        let liElem = document.createElement('li');
        liElem.innerHTML = `${dt.username}: ${dt.message} <br> ${this.formatDate(dt.created_at.toDate())}`
        //return liElem;
        return this.list.append(liElem)
    }
    delete(){
        this.list.innerHTML = '';
    }
}