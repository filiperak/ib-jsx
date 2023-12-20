function zdravo(){
    console.log('hallo world');
}
zdravo();
//////////////////////////////////////////////
//ispis prosledjenog teksta
//////////////////////////////////////////////

function ispisiTekst(tekst){
    console.log(tekst);
}
ispisiTekst('ovo  je prvi tekst');
ispisiTekst('ovo je drugi tekst');
let t = 'moj tekst';
ispisiTekst(t);
////////////////////////////////////////////
//funkcija sa dva parametra
////////////////////////////////////////////
function imePrezime(ime,prezime,...args){
    console.log(`Ulogovana osoba je ${ime} ${prezime}. Osoba ima ${args} godina`);
}
imePrezime('tanja','veselinovic',21);
let imeOsobe = 'filip';
//let prezimeOsobe = 'erak';
let godineOsobbe=19
imePrezime(imeOsobe,'ERAK',godineOsobbe);
/////////////////////////////////////////////
//funkcija koja vrsi sabiranje dva broja
/////////////////////////////////////////////
function zbir(br1,br2){
    let rezultat = br1+br2;
    console.log(`${br1} + ${br2} = ${rezultat}`);
}
zbir(5,9);
let b1 = -11;
let b2 = -22;
zbir(b1,b1);
zbir(br2=2,br1=3);
zbir(5+4,50);
/////////////////////////////////////////////
//funkcija koja vraca vrednost
/////////////////////////////////////////////
function razlika(umanjenik,umanjilac){
    let razlikRezultat = umanjenik - umanjilac;
    return razlikRezultat;
}
console.log(`razlika je:${razlika(22,12)}`);
let r = razlika(100,4);
console.log(`funkcija vraca ${r}`);
let r1 = razlika(6,3);
let r2 = razlika(17,7);
let r3 = razlika(r1,r2);
console.log(r3);
let r4 = razlika(razlika(40,60),razlika(10,4));
console.log(r4);
///////////////////////

function temperaturaVode(temp){
    let tekstZaIspis = "";
    if(temp <= 0){
        tekstZaIspis = "voda se ledi"
    }else if(temp >= 100){
        tekstZaIspis = "voda isparava"
    }else{
        tekstZaIspis = `voda je tecna ${temp}`
    }
    return tekstZaIspis;
}
let testt = temperaturaVode(50)
console.log(testt);
//3
function neparan(broj){
    let tekst = `broj ${broj} je neparan`;
    if(broj % 2 == 0){
        tekst = `broj ${broj} je paran`;
    }
    return tekst
}
let test1 = neparan(51);
console.log(test1);
//4.1
function max2(broj1,broj2){
    let veciBroj = broj1;
    if(broj1 < broj2){
        veciBroj = broj2
    }
    return veciBroj
}
let testmax2 = max2(5,7);
console.log(testmax2);
//4.2
function max4(broj1,broj2,broj3,broj4){
    let najveciBroj = broj1;
    if(broj2 > broj1 && broj2 > broj3 && broj2 > broj4){
        najveciBroj = broj2;
    }else if(broj3 > broj1 && broj3 > broj2 && broj3 > broj4){
        najveciBroj = broj3;
    }else if(broj4 > broj1 && broj4 > broj2 && broj4 > broj3){
        najveciBroj = broj4;
    }
    return najveciBroj;
}
let testMax4 = max4(202,8,40,333);
console.log(testMax4);
//4,drugi nacin
function max42(a,b,c,d){
    let first  = max2(a,b);
    let second = max2(c,d);
    return max2(first,second)
}
console.log(max42(5,1,9,4))
///////////
//5
function prikaziSliku(adresa){
    document.write(`<img src="${adresa}">`)
}

prikaziSliku("/11_FOR/slike/2.jpeg")
prikaziSliku("/11_FOR/slike/2.jpeg")
prikaziSliku("/11_FOR/slike/2.jpeg")
prikaziSliku("/11_FOR/slike/2.jpeg")
//5 produzen 
function prikaziSlikuUElementu(putanja,id){
    let element = document.getElementById(id)
    element.innerHTML = `<img src="${putanja}">`
}
prikaziSlikuUElementu("/11_FOR/slike/1.jpeg","slikadiv");
//6
function boja(color){
    document.write(`<p style="color:${color}">tekst1234</p>`)
}
let bojaTest1 = boja('#22ff94')
//7
function sedmiDan(n){
    let dani =['pon','uto','srd','cet','pet','sub','ned'];
    return dani[n-1];
}
let testSedmiDan = sedmiDan(3);
console.log(testSedmiDan);
//7,1
//8
let brojac = 0;


function deljivSaTri(n,m){
    let brojac = 0;
    for(let i = n; i <= m; i++){
        if(i % 3 == 0){
            console.log(i);
            brojac++;
        }
    }
    console.log(`u intervalu od ${n} do ${m} ima ${brojac} brojeva deljivih sa tri`);
}
console.log(`brojac je ${brojac}`);
deljivSaTri(10,30);
//9
function sumiraj(n,m){
    let sum = 0;
    for(let i = n; i <= m; i++){
        sum += i;
    }
    return sum;
}
//10
function mnozi(n,m){
    let proizvod = 1;
    for(let i = n;i <= m; i++){
        proizvod *= i;
    }
    return proizvod;
}
console.log(mnozi(2,6));
//11
function aritmeticka(n,m){
    let sum = 0;
    let brojac = 0;
    for(let i = n; i <= m; i++){
        sum += i;
        brojac++;
    }
    return sum / brojac;
}
//12
function aritmetickaTri(n,m){
    let sum = 0;
    let brojac = 0;
    
    for(let i = n;i <= m; i++){
        if(i % 10 == 3){
            sum += i;
            brojac++;
        }
    }
    return sum / brojac;
}
console.log(aritmetickaTri(1,30))
//13
function velicinaFonta(n){
    let paragraf = document.createElement("p");
    paragraf.textContent="testFont"
    paragraf.style.fontSize = `${n}px`;
    document.body.appendChild(paragraf);
}
//druginacin
function velicinaFonta2(n){
    let paragraf = document.querySelector(".paragraf")
    paragraf.innerHTML = "druginacin"//(`<p style="font-size:${n}px">drugi nacin</p>`)
    paragraf.style.fontSize = `${n}px`;
}
velicinaFonta2(20)
velicinaFonta(50)
//14
function recenica5(){
    for(let i = 10;i <= 30;i+=5){
        document.write(`<p style="font-size:${i}px">tekst123456</p>`)
    }
}
recenica5()
//15///////greska!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function poslednjaPlata(n,a,d){
    let plata = 0;
    for(let i = 0; i <= n; i++){
        plata += d +a
    }
    return plata;
}
console.log(poslednjaPlata(3,1000,50));
///
function poslednja(n,a,d){
    return a+(n-1)*d
}
console.log(poslednja(3,1000,50))
////////////////////////////////////////////
function ukupnaPlata (n, a, d){
    let suma = 0;
    for(let i = 0; i< n; i++){
        suma = suma + a + d * i;
    }
    return suma;
}
console.log(ukupnaPlata(5, 10, 2));
//16
function igreBezGranica(t,p,n){
    if(t < p || t > p+n){
        console.log('cekanje je 0');
    }else{
        let cekanje = p +n -t;
        console.log(`cekanje je ${cekanje}`);
    }
}
igreBezGranica(15,20,25);
igreBezGranica(15,10,12);
//