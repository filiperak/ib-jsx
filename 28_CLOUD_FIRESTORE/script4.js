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

