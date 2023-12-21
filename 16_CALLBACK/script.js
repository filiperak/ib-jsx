//TEST PRIMERI
let a = [-6,8,11,6,0];
let b = ['pera','mika','laza']
//bez callback funkcije

function ispisNizaKonzola(arr){
    let s = "";
    for(let i = 0; i < arr.length;i++){
        s += arr[i] +" ";
    }
    console.log(s);
}

function ispisNizaStranica(arr){
    let s = "";
    for(let i = 0; i < arr.length;i++){
        s += arr[i] +" ";
    }
    let div = document.getElementById("container");
    div.innerHTML += s;
}

ispisNizaKonzola(a)
ispisNizaKonzola(b)
ispisNizaStranica(a);
ispisNizaStranica(b);

//Funkcija 1: niz => {for petljiom prodjemo  kroz sve elemente niza i generisani string ispisujemo u consoli}
//Funkcija 2: niz => {for petljiom prodjemo  kroz sve elemente niza i generisani string ispisujemo u div tag}
//funkcija:(niz,nacin) => {for petljiom prodjemo  kroz sve elemente niza i generisani string ispisujemo na zadati nacin}

//sa callback funkcijjom
function ispisKonzola(p){
    console.log(p);
}

function ispisStraniva(p) {
    let div = document.getElementById("container");
    div.innerHTML += p;
}

function ispisNiza(arr,callback){
    let s = "";
    for(let i = 0; i < arr.length;i++){
        s += arr[i] +" ";
    }
    callback(s)
}

ispisNiza(a,ispisKonzola);
ispisNiza(b,ispisKonzola);
ispisNiza(a,ispisStraniva);
ispisNiza(b,ispisStraniva);

// anonimna funkcija kao callback funkcija
ispisNiza([1,2,3,4,5], function(p) {
    console.log(p);
});

// arrow funkcija kao callback funkcija
ispisNiza([9,8,7,6],(p) => {
    console.log(p);
});

//ffoeEach petlja
a.forEach(ispisKonzola);
//prolazi kroz sve elemente niza i za svaki element niza poziva callback funkciju i prosledjuje vednost kao argument.  a=[-6,8,11,6,0] ispiskonzola(-6),ispiskonzola(0),ispisKonzola(11)
b.forEach(ispisKonzola);
// anonimna funkcija
a.forEach(function(e){
    console.log(e);
});
//arrow f
a.forEach((e) => {
    let div = document.getElementById("container");
    div.innerHTML += e + " ";
});
// 2 parametra prvi je element , drugi INDEX
a.forEach((e,i) => {
    console.log(`element ${e} u nizu ima index ${i}`);
});

a.forEach((e,i,t) => {
    console.log(`${t}`);
});