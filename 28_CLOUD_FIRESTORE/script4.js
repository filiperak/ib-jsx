//dohvatanje dokumenata iz kolekcije po redosledu polja
//dokument mora da sadrzi to polje da bi bio dohvacen
//ako ima vise od jednog polja neophodno je prvo kreirati index

/*
db.collection('users')
.orderBy('name','desc')
.orderBy('age','asc')
.get()
.then(snapshot => {
    snapshot.forEach(elem => {
        let data = elem.data()
        console.log(data);
    })
})
.catch(err => {
    console.log(`error: ${err}`);
});
*/

//DOHVATANJE ODREDJENOG BROJA DOKUMENATA (LIMITIRANJE)

db.collection('users')
//.orderBy('name','desc')
//.orderBy('age','asc')
.get()
.then(snapshot => {
    snapshot.forEach(elem => {
        let data = elem.data()
        console.log(data);
    })
})
.catch(err => {
    console.log(`error: ${err}`);
});