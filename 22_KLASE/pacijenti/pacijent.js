//Kreirati klasu Pacijent koja od polja sadrži ime, visina i tezina. Od metoda sadrži:
//Odgovarajuće getere i setere, s tim što je potrebno da se u odgovarajućim seterima proveri da li je visina između 0 i 250, a težina između 0 i 550. Ukoliko uslovi nisu ispunjeni, odredite proizvoljno vrednosti na koje želite da setujete ove dve vrednosti.

class Pacijent {
    constructor(i,p,v,t){
        this.ime = i;
        this.prezime = p;
        this.visina = v;
        this.tezina = t;
    }
    set ime(i){
        this._ime = i;
    }
    set prezime(p){
        this._prezime = p;
    }
    set visina(v){
        if(v > 0 && v < 250){
            this._visina = v;
        }else{
            this._visina = 100
        }
    }
    set tezina(t){
        if(t < 0 || t > 550){
            this._tezina = 50;
        }else{
            this._tezina = t
        }
    }

    get ime(){
        return this._ime;
    }
    get prezime(){
        return this._prezime;
    }
    get visina(){
        return this._visina;
    }
    get tezina(){
        return this._tezina
    }
    stampaj(){
        console.log(`${this.ime} ${this.prezime} je visok${this._visina} i tezak ${this.tezina} kg`);
    }
    bmi(){
        let bmiRez= this.tezina / ((this.visina / 100) **2);
        //console.log(bmiRez);
        return bmiRez
    }
    kritican(){
        if(this.bmi() < 15 || this.bmi() > 40){
            return true;
        }
        return false;
    }
}

export {Pacijent}