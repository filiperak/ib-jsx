//DOM
const liElementi = document.querySelectorAll('li');
const btnDodaj = document.querySelector('#submit');
const inputZadatka = document.querySelector('#task');
const ulZadatci = document.querySelector('ul')

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
            ulZadatci.prepend(liNoviZadatak)
        }else{
            ulZadatci.appendChild(liNoviZadatak);
        }
    }
    inputZadatka.value = '';  
    }
});
