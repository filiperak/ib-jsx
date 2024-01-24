import { Pacijent } from "./pacijent.js";

let pacijent1 = new Pacijent('filip','erak',185,82);
let pacijent2 = new Pacijent('tanja','veseljinovic',170,49);
let pacijent3 = new Pacijent('test','test',-5,4500)

let arrPacijenti = [pacijent1,pacijent2,pacijent3];
for(let i = 0; i < arrPacijenti.length; i++){
    console.log(arrPacijenti[i].tezina);
}
arrPacijenti.forEach(elem => {
    elem.stampaj();
})
arrPacijenti.forEach(elem => {
   console.log(elem.bmi());
})
arrPacijenti.forEach(elem => {
    console.log(elem.kritican());
})

let najmanjaTezina = (arr) => {
    let min = arr[0].tezina;
    let minObj = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].tezina < min){
            min = arr[i].tezina;
            minObj = arr[i];
        }
    }
    console.log(minObj);
}
najmanjaTezina(arrPacijenti)

let pacijentSaNajmanjomTezinom = (arr) => {
    let minTezinaPacijent = arr[0];
    let minTezina = minTezinaPacijent.tezina
    arr.forEach(elem => {
        if(elem.tezina < minTezina){
            minTezina = elem.tezina;
            minTezinaPacijent = elem;
        }
    });
    return minTezinaPacijent
}
let rez = pacijentSaNajmanjomTezinom(arrPacijenti);
rez.stampaj();
pacijentSaNajmanjomTezinom(arrPacijenti).stampaj();
//Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let pacijentSaNajvecomBmiVrednoscu = (arr) => {
    let maxBmiPacijent = arr[0];
    let maxBmi = maxBmiPacijent.bmi();

    for(let i = 0; i < arr.length; i++){
        if(arr[i].bmi() > maxBmi){
            maxBmi = arr[i].bmi();
            maxBmiPacijent = arr[i];
        }
    }
    return maxBmiPacijent;
}
//console.log(pacijentSaNajvecomBmiVrednoscu(arrPacijenti));
pacijentSaNajvecomBmiVrednoscu(arrPacijenti).stampaj()
//Ispisati sve pacijente čije ime sadrži slovo A.
let pacijentiSaSlovomA = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].ime.length;j++){
            if(arr[i].ime[j] == 'a'){
                console.log(arr[i]);
                break;
            }
        }
    }
}

let pacijentiSaSlovomA2 = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].ime.length;j++){
            let upperName = arr[i].ime[j].toUpperCase();
            if(upperName == 'A'){
                console.log(arr[i]);
                break;
            }
        }
    }
}
pacijentiSaSlovomA2(arrPacijenti);
//Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.
let srednjaVisinaPacijenta = (arr) => {
    let sumaVisina = 0; 
    for(let i = 0; i < arr.length; i++){
        sumaVisina += arr[i].visina;
    }
    return sumaVisina / arr.length;
}
console.log(srednjaVisinaPacijenta(arrPacijenti));

