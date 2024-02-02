let users = db.collection('users');
console.log(users);

let d1 = users.doc('ferak');
console.log(d1);
let d2 = db.doc('users/ferak');
console.log(d2);

//CRUD - create, read, update, deleate
//za pristup dokumentu : 
// let doc = db.collection('.....').doc('.....')
//kod dokumenta imamo sledece metode
//-doc.set('') -> create
//-doc.get('')  -> read
//-doc.update('') -> update
//-doc.deleate('') -> delete
// sve ove 4 metode vracaju PROMISE
//nakaon ovih poziva lancaju se .then() i .catch()
// 

// 1. create (set)
let cust1 = {
    name: 'mika',
    age: 38,
    adresses:['loznica','valjevo'],
    salary: 400.60
};  // JS objekat - na osnovu njega kreiramo dokument u bazi
db.collection('customers').doc('cust1')
.set(cust1)
.then(() => {
    document.body.innerHTML += 'korisnik dodat u bazu'
})
.catch(e => {
    document.body.innerHTML += `desila se greska ${e}`
})

//let cust2 = {name: 'mika',age: 38,adresses:['loznica','valjevo'],salary: 400.60}
db.collection('customers').doc('cust2')
.set({name: 'mika',age: 38,adresses:['loznica','valjevo'],salary: 400.60})
.then(() => {
    document.body.innerHTML += 'korisnik dodat u bazu'
})
.catch(e => {
    document.body.innerHTML += `desila se greska ${e}`
})