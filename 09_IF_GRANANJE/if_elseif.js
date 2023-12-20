let datum = new Date();
let sati = datum.getHours();

if(sati < 9) {
    console.log(`firma ne radi`);
}else if(sati >= 17){
    console.log(`firma ne radi`);
}else{
    console.log(`firma radi`);
}

//zadatak 6

let dan = datum.getDay();
if(dan >5) {
    console.log(`vikend`);
}else if(dan == 0) {
    console.log(`vikend`);
} else {
    console.log(`radni dan`);
}

//zadatak 7

if(sati <= 12) {
    console.log(`dobro jutro`);
}else if(sati <=18) {
    console.log(`dobar dan`);
} else {
    console.log(`dobro veče`);
}

//zadatak 9 Za unet sat početka i sat kraja radnog vremena dva lekara,  
//ispisati DA ukoliko se smene lekara preklapaju, 
//u suprotnom ispisati NE.

let lekar1PocetniSat;
let lekar1ZavrsniSat;
let lekar2PočetniSat;
let lekar2ZavrsniSat;






//zadatakk 10
let broj1 = 8;
let broj2 = 6;

if(broj1 === broj2){
    document.write(`jednaki`);
}else if(broj1 > broj2){
    document.write(`broj ${broj1} je sledbenik`);
} else {
    document.write(`broj ${broj2} je prethodnik`);
}

//zadatak 11 Učitati broj ispitati na ekranu 
//“Ceo broj”, ukoliko je učitani broj ceo. 

let ceoBroj = 20.5;
if( ceoBroj % 1 !==0){
    console.log("nije ceo broj");
}else{
    console.log("ceo broj");
}


//9 zadatak
let p1 = 8;
let k1 = 9;
let p2 = 8;
let k2 = 9;
if(k1 <= p2) {
    console.log('ne poklapaju');
}else if(k2 <= p1) {
    console.log('ne poklapaju');
}else {
    console.log('smene se poklapaju');
}
