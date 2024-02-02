class User {
    constructor(n,s,a) {
        this.name = n;
        this.surname = s;
        this.age = a;
    }
}


/*
ivan.poreklo = 'Leskovak'
branko.potpis = function(){
    console.log(this.name,this.surname);
}   //DODAVANJE METODE
branko.potpis();
*/
User.prototype.bojaKose = 'crna';

let branko = new User('Branko','Milivojevic',27);
branko.grad = 'Paracin';

let ivan = new User('ivan','Stanimirovic',37);
ivan.poreklo = 'leskovac';

console.log(ivan.bojaKose);

db.collection('users').doc('cust04')
.set(Object.assign({},branko))
.then(() => {
    console.log('uspesno dodat user');
})
.catch((e) => {
    console.log(`greska ${e}`);
});

db.collection('users').doc('istanimirovic')
.set(Object.assign({},ivan))
.then(() => {
    console.log('uspesno dodat user');
})
.catch((e) => {
    console.log(`greska ${e}`);
});
// JS poziva set metodu kojoj se prosledjuje OBJEKAt
//na osnovu tog objrkta se u bazi podataka kreira novi DOKUMENT


//JS OBJEKAT
//1- MOZE ZA POSEBAN OBJEKAT DA SE DODAJU POLJA I METODE(KAO I ZA DOKUMENTA U BAZI)
//2- MOZE KLASI KOJOJ PRIPADA OBJEKAT DA SE DODAJU POLJA I METODE
//3- MOZE DA SE NASLEDJUJE KLASE { User -> User.creditCard}

//PRIMER
//HTML: FORMA GDE SE UNOSE KORISNICI
//IME,PREZIMEE GODINE I PREPLATA
//AKO KORISNIK ODABEERE KARTICE KAO NACIN PLACANJA, ZA TE KORISNIKE PAMTI I POLJE BROJ KARTICE
//
