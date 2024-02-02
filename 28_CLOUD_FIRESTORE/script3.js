let datum1 = new Date('2024-01-26 17:00:00');
let datum2 = new Date('2024-01-26 21:00:00');

db.collection('tasks')
.add({
    title:'cas itbootcamp',
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description:'caas iz baza podataka'
})
.then(() => {
    console.log('uspesno dodattask');

})
.catch((e) => {
    console.log(`greska ${e}`);
});

//doc().set -> kompletno gazi sadrzaj dokumenta
//doc.update -> menja sadrzaj postojecih polja

db.collection('users').doc('cust04')
.update({
    age: 28
})
.then(() => {
    console.log('uspesno promenjene godine')
})
.catch((e) => {
    console.log(`greska ${e}`);
});
/*
class Film {
    constructor(n,d,ry,g,r){
        this.name = n;
        this.director
    }
}
*/
let film1 = {
    name : 'cuvarii formule',
    director: {ime:'dragan',prezime:'bjelogrlic'},
    release_year: 2023,
    rating: 8.5
}
let film2 = {
    name : 'pulp fiction',
    director: {ime:'quentin',prezime:'tarantino'},
    release_year: 1994,
    rating: 9.5
}

db.collection('movies').doc('film1')
.set(film1)
.then(() => {
    console.log('postavljen film');
})
.catch((e) => {
    console.log(`greska ${e}`);
});

db.collection('movies').doc('film2')
.set(film1)
.then(() => {
    console.log('postavljen film');
})
.catch((e) => {
    console.log(`greska ${e}`);
});


let dodavanjeUBazu = (arr) => {
    arr.forEach(elem => {
        db.collection('movies')
        .add(elem)
        .then(() => {
            console.log('postavljen film');
        })
        .catch((e) => {
            console.log(`greska ${e}`);
        });
    })
}
let filmovi = [film1,film2]
//dodavanjeUBazu(filmovi)

let menjanjePodataka = (col,doc,polje,noviPodatak) => {
    db.collection(col).doc(doc)
    .update({
        polje:noviPodatak
    })
    .then(() => {
        console.log('izvrsen update');
    })
    .catch((e) => {
        console.log(`greska ${e}`);
    });
}

db.collection('movies').doc('film1')
.update({
    rating:7.9
})
.then(() => {
    console.log('izvrsen update');
})
.catch((e) => {
    console.log(`greska ${e}`);
});

db.collection("movies").doc("film1")
.set( {
    name: "Terminator2",
    release_year: 1991,
    director: {
        ime: "James",
        prezime: "Cammeron"
    },
    genres: ["action", "thriller", 'sf'],
    rating: 9.2,
})
.then(() => {
    console.log("Movie added");
})
.catch((e) => {
    console.log(`Greska${e}`);
})

////////////////////////////////////////////////
db.collection("movies").doc("film2")
.set( {
    name: "LOTR return of the king",
    release_year: 2003,
    director: {
        ime: "Peter",
        prezime: "Jackson"
    },
    genres: ["action", "fantasy",],
    rating: 9.5,
})
.then(() => {
    console.log("Movie added");
})
.catch((e) => {
    console.log(`Greska${e}`);
})
db.collection("movies").doc("film3")

.set( {
    name: "Star wars new hope",
    release_year: 1979,
    director: {
        ime: "George",
        prezime: "Lucas"
    },
    genres: ["comedy", "family", "SF"],
    rating: 8.2,
})
.then(() => {
    console.log("Movie added");
})
.catch((e) => {
    console.log(`Greska${e}`);
})
db.collection("movies").doc("film1")
.update ({
    rating: 9.8
})
.then(() => {
    console.log("Film izmenjen");
})
.catch((e) => {
    console.log(`Greska${e}`);
})
db.collection("movies").doc("film2")
.update ({
    genres : firebase.firestore.FieldValue.arrayUnion("family")
})
.then(() => {
    console.log("Dodat zanr");
})
.catch((e) => {
    console.log(`Greska${e}`);
})


/////////////////////////////////////////////
////////////////////////////////////////////////
//////////////////////////////////////////////
db.collection('movies').doc('film1')
.set({
    name: "Terminator2",
    release_year: 1991,
    director: {
        ime: "James",
        prezime: "Cammeron"
    },
    genres: ["action", "thriller", 'sf'],
    rating: 9.2,
})
.then(() => {
    console.log('uspesno dodat film');
    return db.collection('movies').doc('film1')
    .update({
        rating:5
    })
})
.then(() => {
    console.log('uspesan update');



/*
    return db.collection('movies').doc('film1')
    .get()
    .then(doc => {
    if(doc.exists){
        let data = doc.data();
        console.log('uspesno dohvacen dokument:'+ doc.id);
        console.log(data);
    }else{
        console.log('ne postoji ovaj dokument');
    }
})
*/
})
.catch((e) => {
    console.log(`Greska${e}`);
})
////////////////////////////////////////
///////////////////////////////////////
//DOHVATANJE DOKUMENTA

db.collection('movies').doc('film1')
.get()
.then(doc => {
    if(doc.exists){
        let data = doc.data();
        console.log('uspesno dohvacen dokument:'+ doc.id);
        console.log(data);
    }else{
        console.log('ne postoji ovaj dokument');
    }
})
.catch((e) => {
    console.log(`Greska${e}`);
})
///////////////////////////
// DOHVATANJE SVIH DDOKUMENATA IZ KOLEKCIJE
db.collection('customers')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(doc.id, '->' ,data);

    })
})
.catch((e) => {
    console.log(`Greska${e}`);
})
