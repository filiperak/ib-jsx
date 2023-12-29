console.log(document);
console.log(document.body);//body svojstvo document objekta je objekat

let e1 = document.getElementById('p2');
console.log(e1);    //  jedinstven objekat iz DOM stabla

let el2 =document.getElementsByClassName('par');//html kolekcija objekata iz dom stabla
console.log(el2);

//pristup elementimaHTML kolekcije

for(let i = 0; i < el2.length; i++){
    console.log(el2[i]);
}
//  html kolekcije ne poseduju for each petlju
///     el2.forEach(elem => console.log(elem))
let niz = Array.from(el2);
niz.forEach(elem => {
    console.log(elem);
});
let el3 = document.getElementsByTagName("p");
console.log(el3);

let el4 = document.getElementsByName('p');
console.log(el4);
el4.forEach(elem => console.log(elem));
let t1 = document.querySelector("#p2");
console.log(t1);
let t2 = document.querySelector(".par");
console.log(t2);

let t3 = document.querySelectorAll(".par");
console.log(t3);
t3.forEach(elem => console.log(elem));

let t4 = document.querySelectorAll("div p.par,div a.par");
console.log(t4);
//////////////////////////////////////////////////////
let prviP = document.querySelector("p")
console.log(prviP);

let prviError = document.querySelector("div.error");
console.log(prviError);

let sviLinkovi = document.getElementsByTagName('a')
console.log(sviLinkovi);

let sveSlike = document.getElementsByTagName("img");
console.log(sveSlike);

let sve = document.body.getElementsByTagName("*");
console.log(sve);
let sviNiz = Array.from(sve)
sviNiz.forEach(elem => console.log(elem))


let poslednjiRed = document.querySelector('tr:last-of-type')
console.log(poslednjiRed);

let link = document.querySelector('a');
link.innerHTML = '<span style="font-weight:bold">Novi tekst</span> prvog linka';
//link.href = 'https://www.google.com';
link.setAttribute("href", "https://www.google.com")
//link.target = '_blank';
link.setAttribute('target','_blank')
link.id = "pera";
link.style.color = 'red';
link.style.textDecoration ='none'
link.style.fontSize = "20px"

let linkovi = document.querySelectorAll('a')
linkovi.forEach(link =>{
    //link.id = "pera";
    //link.style.color = 'red';
    //link.style.textDecoration ='none'
    //link.style.fontSize = "20px"
    link.setAttribute('style','color: red; font-size:20px; text-decoration:none;')
});
//1
let paragrafi = document.querySelectorAll('p');
paragrafi.forEach(elem => {
    elem.innerHTML += " VAZNO!!!"
});
//2
let errorDiv = document.querySelectorAll('div.error')
errorDiv.forEach(elem => {
    elem.innerHTML+= `<h1>Greška!!</h1>`
});
//3
for(let i = 0; i < paragrafi.length; i++){
    
    paragrafi[i].innerHTML += (i+1)**2
}
//4
let slike = document.querySelectorAll('img')
slike.forEach(elem => {
    elem.setAttribute('alt','alternativni tekst')
});
//5
paragrafi.forEach((elem, ind) => {
    if(ind % 2 == 0){
        elem.style.color = 'yellow'

    }
});
paragrafi.forEach( (elem,ind) => {
    if(ind % 2 == 0){
        elem.style.backgroundColor = 'green'
    }else{
        elem.style.backgroundColor = 'red'
    }
})
////////////////////////////////////
linkovi.forEach((elem,ind) => {
    elem.style.padding ="5px";
    elem.style.fontSize = "18px";
    elem.style.textDecoration = "none";
    if(ind % 2 == 0){
        elem.style.backgroundColor ="green";
        elem.style.color="purple";
    }else{
        elem.style.backgroundColor ="blue";
        elem.style.color ="white"
    }
})

let img = document.querySelectorAll('img');
 
/*img.forEach(elem => {
    console.log(elem.src);
})*/
for(let i =0; i < img.length ; i++){
    for(let j =img[i].src.length; j > 0; j--){
        if(img[i].src[0] == 'g' && img[i].src[1] == 'e' && img[i].src[2] == 'p' ){
            img[i].style.border = "2px solid red"
        }
    }
}
document.querySelectorAll('img[src$=".jpeg"]').forEach(elem => {
    elem.style.border = "2px solid red"
})
let div = e1.parentNode;
console.log(div);
console.log(div.childNodes[1]);
div.childNodes.forEach(elem => {
    let tip = elem.nodeName;
    if(tip != "#text"){
        console.log(tip);
    }
})