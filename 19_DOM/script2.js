let paragrafi = document.querySelectorAll('p');
paragrafi.forEach((elem,ind) => {
    if(ind % 2 == 0){
        elem.classList.add("error")
    }else{
        elem.classList.add("success")
    }
});
paragrafi.forEach((elem, ind) => {
    if (ind % 3 === 0) {
        elem.style.fontSize = '25px';
    } else if (ind % 2 === 0) {
        elem.style.fontSize = '20px';
    } else {
        elem.style.fontSize = '15px';
    }
});
paragrafi.forEach(elem => {
    if(elem.textContent.includes('error')){
        elem.classList.remove('success')
        elem.classList.add('error');
    }else if(elem.textContent.includes('success')){
        elem.classList.remove('error')
        elem.classList.add('success');
    }
});
paragrafi.forEach(elem => {
    elem.classList.toggle('error')
});
///////////////////////////////////////
let noviDiv = document.createElement('div');
noviDiv.innerHTML = "div kreiran u js"
noviDiv.style.backgroundColor ="green"
document.body.append(noviDiv);


let noviNaslov = document.createElement("h3");
noviNaslov.innerHTML = "NASLOV NASLOV"
noviNaslov.style.backgroundColor = "red"
noviDiv.append(noviNaslov)

//////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////////////////////////////
let lista = document.createElement("ul");
noviDiv.appendChild(lista);

let li1 = document.createElement("li");
li1.innerHTML = "prva stavka liste";
let li2 = document.createElement("li");
li2.innerHTML = "druga stavka liste";
let li3 = document.createElement("li");
li3.innerHTML = "treca stavka liste";

lista.append(li1,li2,li3);
//lista.removeChild(li1)
//lista.removeChild(lista.firstChild)
lista.removeChild(lista.childNodes[0])

let li4 = document.createElement("li");
li4.innerHTML = "cetvrta stavka liste"
lista.replaceChild(li4,li3)
//dodati u ul sliku
let li5 = document.createElement("li");
lista.appendChild(li5);
let slika = document.createElement("img");
slika.src = "/11_FOR/slike/1.jpeg"
li5.append(slika);