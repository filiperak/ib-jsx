//DOM
const liElementi = document.querySelectorAll('li');
const btnDodaj = document.querySelector('#submit');
const inputZadatka = document.querySelector('#task');
const ulZadatci = document.querySelector('ul')

let nizZadataka = [];
if(localStorage.getItem('zadatci') == null){
    //ne postoje josuvek zadatci u memoriji
    localStorage.setItem('zadatci',JSON.stringify(nizZadataka));    //json.stringify ga oretvar au string
}else{
    //postoje zadatci i treba ih napisati na stranici
    nizZadataka = JSON.parse(localStorage.getItem('zadatci'));  //json.parse ga pretvara u niz
    //console.log(nizZadataka);
    nizZadataka.forEach(elem => {
        let liZad = document.createElement('li'); //kreiramo novi li element
        liZad.textContent = elem;   //upisujemo u <li> ttekstualni sadrzaj
        ulZadatci.appendChild(liZad);

    })
}

ulZadatci.addEventListener('click', (e) => {

    //console.log('kliknuto');
    //console.log(e.target); vraca ceo element na koj je kliknuto
    //console.log(e.target.tagName); vraca tag na koj jje kliknuto

    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('precrtaj')
    }
});

ulZadatci.addEventListener('dblclick',(e) => {
    if(e.target.tagName == 'LI'){
        e.target.remove();
        //console.log(e.target.textContent);
        let indexElementa = nizZadataka.indexOf(e.target.textContent);
        nizZadataka.splice(indexElementa,1);
        localStorage.setItem('zadatci',JSON.stringify(nizZadataka));
    }
});

inputZadatka.addEventListener('keyup',(e) => {
    //e.preventDefault()
    //console.log(e.keyCode);

    //ako je neko kliknuo na taster enter, njegov keycode je 13

    if(e.keyCode == 13){
        let tekstZadatka = inputZadatka.value
        let liNoviZadatak = document.createElement('li');

        if(tekstZadatka.trim() != ''){
        liNoviZadatak.textContent = tekstZadatka;

        //dodavanje na pocetak ili kraj
        let radioDodaj = document.querySelector('input[name="r"]:checked')
        if(radioDodaj.value == 'pocetak'){
            ulZadatci.prepend(liNoviZadatak);
            nizZadataka.unshift(tekstZadatka);      //dodajemo na pocetak niza
        }else{
            ulZadatci.append(liNoviZadatak);
            nizZadataka.push(tekstZadatka);  //dodajemo na kraj niza
        }
    }
    localStorage.setItem('zadatci', JSON.stringify(nizZadataka));
    inputZadatka.value = '';  
    }
});
