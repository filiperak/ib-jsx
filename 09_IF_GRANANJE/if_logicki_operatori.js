//1.nacin
let t = -25;
if(t < -15 || t > 40) {
    console.log(`ekstremna temperatura`);
} else {
    console.log(`nije ekstremna temperatura`);
}
//2.nacin
if(t >= -15 && t >= 40) {
    console.log(`${t} nije ekstremna temperatura`);
}else {
    console.log(`${t} je ekstremna temperatura`);
}
//16zadatak
let date = new Date();
let godina = date.getFullYear();
if((godina % 4 == 0) && (godina % 100 != 0 || godina % 400 == 0)) {
    console.log(`godina je prestupna`);
}else{
    console.log(`nije prestupna`);
}
//zadatak 17
let dan = date.getDay();
let vreme = date.getHours();
//console.log(dan);
/*if(dan == 0){
    console.log(`ZATVORENO`);
    document.write('<img src="closed.jpg">');

}else */
if((dan == 6 || dan == 0) && (vreme <= 9 && vreme >=20)){
    console.log(`ZATVORENO`);
    document.write('<img src="closed.jpg">');

}else if(vreme >= 20 || vreme < 9){
    console.log(`ZATVORENO`);
    document.write('<img src="closed.jpg">');
}else {
    console.log(`OTVORENO`);
    document.write('<img src="open.jpg">')
}

//18 a)
let b1 = 6;
let b2 = -5;
let b3 = 0;

let maximum = b1;
if(b2 > maximum){
    maximum = b2;
}
if(b3 > maximum){
    maximum = b3;
}
console.log(`Najveci mroj je ${maximum}`);
//18 b)
let maximum2=null;
if(b1 > b2){
    maximum2 =b1;
}else{
    maximum2 = b2;
}
if(maximum2 < b3){
    maximum2 = b3;
}

//c
if(b1 > b2) {
    if(b1 > b3) {
        console.log('b1 je najveci');
    }else{
        console.log('najveci je b3');
    }
}