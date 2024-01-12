class Auto {
    constructor(m,b,k){
        this.marka = m;
        this.boja = b;
        this.imaKrov = k;
    }
    //konstruktor treba da radi dve stvari
    //1) da kaze koja svojstva ce imati svaki objekat te klase
    //polja nazivajte sa pocetnom donjom crtom
    //2 da postavi vrednosti za ta svojstva
    sviraj(){
        console.log(`auto marke ${this.marka} svira`);
    }

    //geteri i seteri
    // svako polje moze da ima po jedan getter i setter
    //getter dohvata vrednost polja
    //setter postavlja vrednost polja
    //SETTER
    set marka(m){
        if(m.length > 0){
            this._marka = m;
        }else{
            this._marka = 'skoda'
        }
        console.log('pozvan je setter za polje _marka');
    };
    set boja(b){
        if(b.length > 0){
            this._boja = b;
        }else{
            this._boja = 'crna'
        }
    }
    set imaKrov(k) {
        if(k === true || k === false) {
            this._imaKrov = k;
        }else{
            this._imaKrov = false;
        }
    }

    //geteri
    get marka (){
        return this._marka;
    }
    get boja(){
        return this._boja;
    }
    get imaKrov(){
        return this._imaKrov;
    }
}
export {Auto};
