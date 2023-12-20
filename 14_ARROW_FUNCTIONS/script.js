//anonimna funkcija
let suma = function(a,b){
    console.log(this);
    return a + b;
}
console.log(suma(8,6));

//arrow funkcije - anonimne funkcije koje
// imaju 2 specificna svojstva:
//1) imaju skracen zapis
//2) znacenje kljucne reci this

let suma2 = (a,b) => {
    console.log(this);
    return a+b;
}
console.log(suma2(1,2));

let hallo = () => {
    console.log('hallo world');
}
hallo();
hallo();

let echo = (s1,s2) =>{
    let result = s1 + "," + s2;
    console.log(result);
}
echo('filip','erak');
echo('jelena','matejic');
echo('stefan',123);