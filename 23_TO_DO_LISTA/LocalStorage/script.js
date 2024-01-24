//upisivanje/pamcenje u lokalnoj memoriji
localStorage.setItem('ime','Stefan');
localStorage.setItem('grad','Niš');

//izmena u lokalnoj memoriji
localStorage.setItem('grad','Leskovac');
//ukoliko postoji neki key u ls onda vrsi update;
//ukolinko ne postoji neki key u ls onda vrsi upis(novi unos)

//preuzimanje iz lokalne memorije
let unetoIme = localStorage.getItem('ime');
console.log(unetoIme);
console.log(localStorage.getItem('grad'));
console.log(localStorage.getItem('godine'));//vraca null kada key ne postoji

localStorage.removeItem('ime')