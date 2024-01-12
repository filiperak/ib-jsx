import { Auto } from './moduli/auto.js'

let a1 = new Auto('audi','bela',true)
console.log(a1);
console.log(a1.sviraj());

let a2 = new Auto('peugeot','plava',false);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);
console.log(a2._boja);


a2.marka = 'Citroen'; //setter - proistupa mu se kao polju a poziva se metoda
console.log(a2._marka);

a1.marka = ''
console.log(a1._marka);
a1.boja = '';
console.log(a1._boja);
console.log('-------------------');
console.log(a2.marka);
console.log(a2.boja);
console.log(a2.imaKrov);
console.log(a2.boja);

let a3 = new Auto ('','','')
console.log(a3);