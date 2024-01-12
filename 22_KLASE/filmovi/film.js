class Film {

    constructor(n,r,g){
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g
    }
    
    // SETTERI - postavljaju vrednost poslja
    set naslov(n){
        this._naslov = n;
    }

    set reziser(r){
        this._reziser = r;
    }
    
    set godinaIzdanja(gi) {
        if(gi < 1800){
            this._godinaIzdanja = 1800
        }else{
            this._godinaIzdanja = gi;
        }
    }
    // GETTERI - vraca vrednost polja
    get naslov(){
        return this._naslov;
    }
    get reziser(){
        return this._reziser;
    }
    get godinaIzdanja(){
        return this._godinaIzdanja
    }
    stampaj(){
        console.log(`Naslov: ${this.naslov}`);
    }
}
let film1 = new Film('cuvari formule','dragan bjelogrlic',2023);
let film2 = new Film('klopka','srdan golubovic',2007);

console.log(film1);
console.log(film2);
film1.stampaj();
film1.godinaIzdanja = 100  //  ovo poziva samo setter
console.log(film1);
console.log(`film: ${film2.naslov},godina izdanja:${film2.godinaIzdanja}`);