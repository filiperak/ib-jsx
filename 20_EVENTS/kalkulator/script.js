//DOM
const inputNumber1 = document.getElementById("br1");
const inputNumber2 = document.getElementById("br2");
const btnRacunaj = document.getElementById("racunaj");
const btnResetuj = document.getElementById("resetuj");
const pRezultat = document.getElementById("rezultat");

btnRacunaj.addEventListener('click', (e) => {
    e.preventDefault();
    let br1 = Number(inputNumber1.value);
    let br2 = Number(inputNumber2.value);
    let inputOperacija  = document.querySelector("input[name = 'operacija']:checked");
    let operacija = inputOperacija.value
    let rez = undefined;
    let o = "";
        //console.log(inputOperacija);
        //console.log(operacija);

    if(operacija == "sabiranje"){ //  OBAVEZNO APOSTROFI VALUE JE STRING
        rez = br1 +br2;
        o = '+';
    }else if(operacija == "oduzimanje"){
        rez = br1 - br2;
        o = '-';
    }else if(operacija == "mnozenje"){
        rez = br1 * br2;
        o = '*'
    }else{
        if(br2 == 0){
            o = '/'
            alert('nije dozvoljeno deliti nulom')
        }else{
            rez = br1 / br2;
            o = '/'
        }
        
    }
    pRezultat.innerHTML = `${br1} ${o} ${br2} = ${rez}`
});

btnResetuj.addEventListener('click',() =>{
    pRezultat.innerHTML = ""
})