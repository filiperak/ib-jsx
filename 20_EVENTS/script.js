//1.    DOHVATITI ELEMENT NA KOJI ZELIMO DA POSTAVIMO OSLUSKIVAC
let btnHallo = document.querySelector('#hallo');
let pIspisBroj = document.querySelector("#ispisBroja")
//2.    POSTAVIMO OSLUSKIVAC NA ELEMENT KOJI SMO DOHVATILI
btnHallo.addEventListener('click', () => {
    console.log('hallo!');
});

btnHallo.addEventListener('dblclick',() => {
    console.log('hallo hallo');
});
////
let btnBroji = document.querySelector("#broji")
let count = 0;
btnBroji.addEventListener("click",() => {
    console.clear()
    console.log(`broj je ${count}`);
    //2

    pIspisBroj.textContent += `broj je ${count}`
    count++;

});
//  3  zadatak
let b = 0;
let btnMinus = document.querySelector("#minusBtn");
let btnPlus = document.querySelector("#plusBtn");
let spanCount = document.querySelector("#brojac");


btnMinus.addEventListener('click', () => {
    b -= 1;
    if(b < 0){
        b = 0;
    }
    spanCount.innerHTML = b;

})
btnPlus.addEventListener('click', () => {
    b ++;
    if(b < 0){
        b = 0;
    }
    spanCount.innerHTML = b;

});

///////////////////////////////
let btnIspisiTekst = document.querySelector("#ispisiText");
let input = document.querySelector("#text");
let pIspistexta = document.getElementById("ispisTeksta");
btnIspisiTekst.addEventListener('click', ()=> {
    let preuzmiTekst = input.value
    pIspistexta.innerHTML = preuzmiTekst;
    //console.log(Number(input.value));
});
//6
let radioMuski = document.getElementById('muski');
let radioZenski = document.getElementById('zenski')
let radioNeopredeljen = document.getElementById('neopredeljen')
btnIspisiTekst.addEventListener('dblclick', () => {
    //1 nacin
    //console.log(radioMuski.checked);
    if(radioMuski.checked){
        console.log('osoba muskog pola');
    }else if(radioZenski.checked){
        console.log('osoba zenskog pola');
    }else{
        console.log('osoba se nije opredila');
    }
    //2 nacin
    //selektuj mi input polje cij atribun name ima vrednost pol  i pri tome je chekiran
    let checkedPol = document.querySelector('input[name="pol"]:checked')
    //console.log(checkedPol.value,checkedPol.id);
    console.log(`osoba je ${checkedPol.value}pola(drugi nacin)`);
    //3 nacin
    //selektun sve radio buttone prema name atributu
    let polRadios = document.getElementsByName('pol');
    //console.log(polRadios);//vraca nodeLIst
    polRadios.forEach(elem => {
        if(elem.checked){
            console.log(`osoba je ${elem.value} pola(treci nacin)`);
        }
    });
    //4
    let polRInput = document.querySelectorAll('input[name="pol"]');
    polRInput.forEach(elem => {
        if(elem.checked){
            console.log(`osoba je ${elem.value} pola(cetvrti nacin)`);
        }
    })

});
////////////////////////////////////////////////////
let kInput = document.querySelector("#kvadratInput");
let kButton = document.querySelector("#kvadratButton");
let kRez = document.querySelector("#kvadratRezultat");

let pInput = document.querySelector("#prepoloviInput");
let pButton = document.querySelector("#prepoloviButton");
let pRez = document.querySelector("#prepoloviRezultat");

let prInput = document.querySelector("#precnikInpuz");
let prButton = document.querySelector("#precnikButton");
let prRez = document.querySelector("#precnikRezultat");

kButton.addEventListener('click',() => {
    kRez.innerHTML = (kInput.value) ** 2;
    kInput.value= "";
})

pButton.addEventListener('click',() => {
    pRez.innerHTML = (pInput.value) /2;
    pInput.value = "";
});

prButton.addEventListener('click',() => {
    prRez.innerHTML = ((prInput.value) ** 2)* Math.PI;
    prInput.value = ""
});