class Film {

    constructor(n,r,g,o){
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g
        this.ocene = o;
    }
    
    // SETTERI - postavljaju vrednost poslja
    set ocene(o){
        for(let i = 0; i < o.length; i++){
            if(o[i]< 5 || o[i] >10|| o[i]!=Math.ceil(o[i])){
                o[i] = 5;
            }
        }
        this._ocene = o;
    }
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
    //getteri kad se pozivaju ne treba pisati zagrade, 
    //metode kada se pozivaju treba pisati zagrade
    get ocene(){
        return this._ocene;
    }
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

    prosecna(){
        let suma = 0;
        for(let i = 0; i < this.ocene.length; i++){
            suma += this.ocene[i];
        }
        return suma / this.ocene.length
    }
}
export default Film;
/*
let film1 = new Film('cuvari formule','dragan bjelogrlic',2023);
let film2 = new Film('klopka','srdan golubovic',2007);

console.log(film1);
console.log(film2);
film1.stampaj();
film1.godinaIzdanja = 100  //  ovo poziva samo setter
console.log(film1);
console.log(`film: ${film2.naslov},godina izdanja:${film2.godinaIzdanja}`);
*/