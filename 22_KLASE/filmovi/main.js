import Film from "./film.js";

let film1 = new Film('cuvari formule','dragan bjelogrlic',2023,[6,6,6,6]);
let film2 = new Film('klopka','srdan golubovic',2007,[9,6,7,8,10,9,7,7,7,9]);
let film3 = new Film('maratonci trce pocasni krug','slobodan sijan',1982,[8,9,10,10,10,9]);
let filmovi = [film1,film2,film3];

film3.stampaj();
filmovi[2].stampaj();
console.log('--------------------------------');

for(let i = 0; i < filmovi.length; i++){
    filmovi[i].stampaj();
}
console.log('--------------------------------');

filmovi.forEach(elem => {
    elem.stampaj();
})
console.log('--------------------------------');
console.log(film3);

console.log(film3.prosecna());
console.log(`prosecna ocena ${film3.naslov} je ${film3.prosecna()}`);
//
//Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
let vekFilmova = (arr,vek) => {
    arr.forEach(elem => {
        let vekFilma = Math.ceil(elem.godinaIzdanja / 100);
        if(vekFilma == vek){
            elem.stampaj()
        }
    })
}

vekFilmova(filmovi,21);

//Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
let prosecnaOcena = (arr) => {
    let suma = 0;
    let br = 0;
    for(let i = 0; i < arr.length;i++){
        for(let j = 0; j < arr[i].ocene.length; j++){
            suma += arr[i].ocene[j];
            //br++;
        }
        br += arr[i].ocene.length
    }
    return suma / br;
}
console.log('--------------------------------');

let prosecnaOcenaFE = (arr) => {
    let suma = 0;
    let br = 0;
    arr.forEach(elem => {
        elem.ocene.forEach(o => {
            suma+= o;
           //br++;
        });
        br += elem.ocene.length;
    });
    return suma / br;
}

console.log(`prosecna ocena je ${prosecnaOcena(filmovi)}`);
console.log(`prosecna ocena je ${prosecnaOcenaFE(filmovi)}`);

//Napisati funkciju najcescaOcena kojoj se prosleđuje niz filmova, a ona vraća ocenu koju su filmovi najčešće dobijali (u opticaju su ocene 5, 6, 7, 8, 9 i 10). 
//Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
let iznadOcena = (arr,ocena) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].prosecna() > ocena){
            arr[i].stampaj()
        }
    }
}
iznadOcena(filmovi,7)

console.log('--------------------------------');

//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu.
let iznadOceneNoviji = (arr,ocena) => {
    let zadovoljenaOcena = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].prosecna() > ocena){
            zadovoljenaOcena.push(arr[i])
        }
    }
    let najnoviji = zadovoljenaOcena[0].godinaIzdanja;
    let najnovijiIZadovoljavaOcenu  = zadovoljenaOcena[0];

    for(let j = 0; j < zadovoljenaOcena.length; j++){
        if(zadovoljenaOcena[j].godinaIzdanja > najnoviji){
            najnoviji = najnoviji[j].godinaIzdanja;
            najnovijiIZadovoljavaOcenu = zadovoljenaOcena[j]
        }
    }
    //console.log(zadovoljenaOcena);
    najnovijiIZadovoljavaOcenu.stampaj()
}
iznadOceneNoviji(filmovi,8);
//Napisati funkciju najcescaOcena kojoj se prosleđuje niz filmova, a ona vraća ocenu koju su filmovi najčešće dobijali (u opticaju su ocene 5, 6, 7, 8, 9 i 10). 

let najcesci=(arr) => {
    let objArr = {};
    let maxElem = arr[0];
    let maxBr = 1;
    for(let i = 0; i< arr.length; i++){
        let elem = arr[i]

        if(objArr[elem]){
            objArr[elem]++;
        }else{
            objArr[elem] = 1;
        }
        if(objArr[elem] > maxBr){
            maxElem =elem;
            maxBr = objArr[elem]
        }
    }
    //console.log(objArr);
    return maxElem;
}
najcesci([1,3,6,5,9,9,9,4,4,5,8,5])
/*
let najcescaOcena = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let oceneArr = arr[i].ocene;
        let najcescaOcena = najcesci(oceneArr);
        console.log(`${arr[i].naslov} je ${najcescaOcena}`);
    }
}
console.log(najcescaOcena(filmovi));
console.log(najcesci([1,2,2,2,3,5,3]));
*/
/////
let najcescaOcena2 = (arr) => {
    let br5 = 0; 
    let br6 = 0; 
    let br7 = 0; 
    let br8 = 0; 
    let br9 = 0; 
    let br10 = 0; 

    arr.forEach(elem => {
        elem.ocene.forEach(o => {
            switch(o){
                case 5:
                    br5++;
                    break;
                case 6:
                    br6++;
                    break;
                case 7:
                    br7++;
                    break;
                case 8:
                    br8++;
                    break;
                case 9:
                    br9++;
                    break;
                case 10:
                    br10++;
                    break;
            }
        });
    });
    let nizOcena = [br5,br6,br7,br8,br9,br10];
    let maxElement = nizOcena[0];
    let maxIndex = 0;
    for(let i = 0; i < arr.length; i++){
        if(maxElement < nizOcena){
            maxElement = nizOcena[i];
            maxIndex = i;
        }
    }
    console.log(nizOcena);
    return maxIndex+5;
}
console.log(najcescaOcena2(filmovi));
//Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film (film koji ima najveću prosečnu ocenu).
let najboljeOcenjeniFilm = (arr) => {
    let najboljeOcenjeni = arr[0];
    let najboljaOcena = najboljeOcenjeni.prosecna();
    arr.forEach(elem => {
        if(elem.prosecna() > najboljaOcena){
            najboljaOcena = elem.prosecna();
            najboljeOcenjeni = elem;
        }
    });
    return najboljeOcenjeni;
}
console.log(najboljeOcenjeniFilm(filmovi).naslov);

//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = (arr) => {
    let najFilm = najboljeOcenjeniFilm(arr)
    let najmanjaOcena = najFilm.ocene[0];
    for(let i = 0; i < najFilm.ocene.length; i++){
        if(najFilm.ocene[i] < najmanjaOcena){
            najmanjaOcena = arr.ocene[i];
        }
    }
    return najmanjaOcena;
}
///console.log(najmanjaOcenaNajboljeg(filmovi));


//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
let osrednjiFilm = (arr) => {
    let prosekSvih = prosecnaOcena(arr);
    let najbliži = arr[0]
    let najblizeProseku = Math.abs(prosekSvih - arr[0].prosecna())
    for(let i = 0; i < arr.length; i++){
        if(Math.abs(prosekSvih - arr[i].prosecna()) < najblizeProseku){
            najblizeProseku = Math.abs(prosekSvih - arr[i].prosecna());
            najbliži = arr[i];
            console.log(najblizeProseku);
        }
    }
    return najbliži;
}
console.log(osrednjiFilm(filmovi));
console.log(prosecnaOcena(filmovi));
console.log(film2.prosecna());
//Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = (arr) => {
    let minOcena = arr[0].ocene[0];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].ocene.length;j++){
            if(arr[i].ocene[j] < minOcena){
                minOcena = arr[i].ocene[j];
            }
        }
    }
    return minOcena;
}
console.log(najmanjaOcena(filmovi));

