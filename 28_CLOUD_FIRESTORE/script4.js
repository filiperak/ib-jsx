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

db.collection('customers')
.where('age','==',21)
.where('salary','>',150)
.orderBy('salary')
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

//dohvata klijente koji imaju preko 25 godina sortirane po imeenu

db.collection('customers')
.where('age','>',25)
.orderBy('age')
.orderBy('name')
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

/*
db.collection('customers')
.where('adresses','array-contains','nis')
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


db.collection('customers')
.where('adresses','array-contains-any',['nis','adress1'])
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


db.collection('customers')
.where('age','in',[21,28])
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
//////////////////////////////////////////////

db.collection('tasks')
.where('priority','==',true)
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
//Treba da se izvrše u tekućoj godini,
//Su završeni,
//Tek treba da počnu.

let datum = new Date();
let godine = datum.getFullYear();
let datum1 = new Date(godine,0,1);
let datum2 = new Date(godine+1,0,1);
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2= firebase.firestore.Timestamp.fromDate(datum2);


db.collection('tasks')
.where('due_date','>=',ts1)
.where('due_date','<',ts2)
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

/////////////////////////////////////////////////////////
/*
db.collection('movies')
.where('rating','<',9)
.where('rating','>',7)
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

db.collection('movies')
.where('genres','array-contains-any',['comedy','action'])
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

db.collection('movies')
.where('genres','array-contains-any',['comedy','action'])
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