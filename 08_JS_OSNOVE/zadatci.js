//zadatak 1
let sati=23;
let minuti=59;
let minutiOdPonoci=sati*60+minuti
console.log("minuta od ponoci: "+minutiOdPonoci);

//zadatak 1.1
let minutaDoPonoci=24*60-minutiOdPonoci
console.log("minuta do ponoci: "+minutaDoPonoci)

//zadatak 2
let vremeUMinutima=60;

let sati2=Math.floor(vremeUMinutima/60);
let minuti2=vremeUMinutima%60;
console.log("prošlo je "+sati2+" sata i "+minuti2+" minuta");

//zadatak3

let cenaRobe=150;
let novcanica=500;
console.log(novcanica-cenaRobe)

//zadatak 4
/*
let vreme = new Date();
let hours = vreme.getHours();
let minutes = vreme.getMinutes();
let seconds = vreme.getSeconds();

console.log(`Current time: ${hours}:${minutes}:${seconds}`);*/

//zadatak 6
//eur u din
let ukupnoEUR=70;
let kursEur=117.29;
let ukupnoDinara=ukupnoEUR*kursEur
console.log(ukupnoDinara)

//din u eur
let novacDinara=5000;
let novarEura=novacDinara/kursEur;
console.log(novarEura);

//zadatak 7 
let brojEur =100;
let kursDollar=106.79;

let brojdolar=brojEur*kursEur/kursDollar;
console.log(brojdolar);

//iz doll u eur
console.log(brojdolar/kursDollar*kursEur)

//zadatak 8
let tempC=30;
let tempuF=tempC*1.8+32;
console.log(tempuF);

let temperaturaC=(tempuF-32)/1.8
console.log(temperaturaC)

//zadatak9
let kelvin=tempC+273.15;
console.log(kelvin)

let tempcc=kelvin-273.15
console.log(tempcc)

//zadatak 4
let datum= new Date();
let god=datum.getFullYear();
let mes=datum.getMonth()+1;
let dan=datum.getDay()
console.log(god,mes,dan);

//URADI 4 I 5

let time=new Date();
time.getHours
time