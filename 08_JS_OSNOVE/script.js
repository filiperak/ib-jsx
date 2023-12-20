document.getElementById("d1").innerHTML="Ja se zovem filip erak";

console.log("zdravo");

console.log("pear");
console.log("mika");

console.log("it's britney");
console.log('it\'s britney 2');

let z=123;
console.log(`${z}blablabla`);
//literali
console.log(5);
console.log(-5.89);
console.log(3+4);
console.log("3"+"4");   //konkatenacija (spajanje stringova)
console.log("3+4");
console.log('3+4=',3+4);
console.log('3+4='+3+4);

console.log(true)
console.log(false)
//promenljive

let x;
x=5;
console.log(x);

x="laza";
console.log(x);

let y=true  //deklaracija plus dodela vrednosti
console.log(y);

let u;
console.log(u);

let nula=null
console.log(nula);

let age=null;
console.log(age,age+3);

let broj=(3+4)*2;
console.log(broj);

broj+=6;
console.log(broj);

//broj =broj+6
broj*=5
console.log(broj)

x=6;
x++;
console.log(x);
++x;
x=6;
console.log(x++);//6--post-increment(prvo se koristi stara vrednost pa se onda uveca)
console.log(x);//7
console.log(++x);//8---pre-increment(prvo se uvedja vrednost pa se onda koristi)

//beba ima 28 meseci
//28 delimo sa 12 i trazima kolicnik i ostatak
console.log(28/12);

console.log(Math.floor(28/12));//2
//ostatak:
console.log(28%12);//4
//28 = 2*12    +   4
//  (kolicnik) (ostatak)
console.log(24%18)
