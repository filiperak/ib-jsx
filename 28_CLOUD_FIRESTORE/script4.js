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
/*
db.collection('users')
.orderBy('name','desc')
.orderBy('age','asc')
.limit(2)
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
//DOHVATANJE DOKUMENATA KOJI ZADOVOLJAVAJU ODREDJENE USLOVE (FILTRIRANJE)
//dohvati seve klijente koji imaju platu vecu ili jednako 300

db.collection('customers')
//.where('age','<',22)
.where('salary','>=',300)
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

// platu izmedju 100 i 200
db.collection('customers')
.where('salary','>=',100)
.where('salary','<=',300)
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