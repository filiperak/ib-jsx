//ispisati brojeve od 1 do 20
let i = 1;
while(i <= 20){
    console.log(`broj ${i}`);
    i++;
}

for(let j = 1; j <= 20; j++){
    console.log(`ovo je broj ${j}`);
}
//od 20 do 1
for(let k = 20; k>=1; k--){
    console.log(`broj k ${k}`);
}
//5 suma od 1 do n
let n = 5;
let sum = 0;
for(let p=1; p<=n; p++){
    sum += p;
}
console.log(sum);
//3
for(i = 0; i <= 20;i+=2){
    console.log(i);
}
//4
for(let i = 5;i <= 15; i++){
    console.log(i*2);
}
//6
sum = 0;
n = 15;
let m = 30;
i = n;
for(i; i <= m; i++){
    sum += i;
}
console.log(sum);
//7
let proizvod = 1;
n = 2;
m = 4;
i = n;
for(i; i <= m; i++){
    proizvod *=i;
}
console.log(proizvod);
//8 Odrediti sumu kvadrata brojeva od n do m *
let sumaKvadrata = 0;
n = 5;
m = 11;
i = n;
for(i;i <= m; i++){
    sumaKvadrata += i ** 2;
}
console.log(sumaKvadrata);
////dodatni
// while loop
n = 123456;
let sumCifara = 0;
let brIteracija=0;
let aritmetickaSredina=0;
let obrnuteCifre=[];
while(n>0){
    let cifra = n % 10;
    sumCifara += cifra;
    n = Math.floor(n / 10);
    brIteracija ++;
    obrnuteCifre.push(cifra);
}
aritmetickaSredina = sumCifara/brIteracija

console.log(`sumacifara je:${sumCifara},
ar.sredina:${aritmetickaSredina}, 
obrnute cifre: ${obrnuteCifre.join("")}`);
//for loop
n = 1234;


//9 Preuzeti proizoljne tri slike sa istom 
//ekstenzijom i imenovati ih 1, 2 i 3. 
//For petljom u HTML-u ispisati svaku od
//sličica uz pomoć brojača (iteratora).

for(i=1; i<= 3; i++){
    document.write(`<img src='slike/${i}.jpeg'></img>`);
}
//12
n =3;
m = 6;
i = n;
sum = 0;
br = 0;
for(i; i <= m ;i++){
    sum+= i;
    br++;
}
let arsr = sum / br;
console.log(arsr);
//10
proizvod = 1;
m = 100;
i = 20;
for(i; i <= m; i++){
    if(i % 11 == 0){
        proizvod *= i;
    }
}
console.log(proizvod);
//11
//Prebrojati koliko ima brojeva deljivih sa 13 u 
//intervalu od 5 do 150.
n = 5;
m = 150;
i = n;
sum = 0;
let brojevideljivi=0;
for(i;i <= m; i++){
    if(i % 13 == 0){
        sum ++;
        brojevideljivi += i +","
    }
}
console.log(sum);
console.log(brojevideljivi);
//16
//Odrediti sumu brojevaa od n do m koji nisu deljivi brojem a

n = 3;
m = 9;
sum = 0;
a = 4;
//brojevideljivi=0
for (i = n; i<=m; i++){
    if(i % a !=0){
        sum += i;
        //brojevideljivi += i+","
    }
}
console.log(sum);
//console.log(brojevideljivi);

//13
n=10;
m=56;
let pozitivno = 0;
let negativno = 0;
for(i = n;i <= m; i++){
    if(i >= 0){
        pozitivno++;
    }else{
        negativno++;
    }
}
console.log(`pozitivni:${pozitivno}, negativnih :${negativno}`)
//14
sum = 0;
n = 5;
m = 50;
for(i = n;i <= m; i++){
    if(i % 3 == 0 || i % 5 == 0){
        sum++;
    }
}
console.log(sum);
//15
n = 20;
m = 60;
sum = 0;
let zbir = 0;
for(i=n;i <= m;i++){
    if(i % 10 == 4){
        sum++;
        zbir+=i;
    }
}
console.log(`${sum} broj brojeva, ${zbir} zbir tih brojeva`);
//17
n=4;
m=22;
a=22;
proizvod=1;
for(i = n;i <= m;i ++){
    if(i % a == 0){
        proizvod*=i;
    }
}
console.log(proizvod);
//18
k = 66;
let delioci = 0;
for(let i =1;i <= k;i++){
    if(k % i == 0){
        delioci++;
    }
}
console.log(delioci);
//2 nacin
k = 12;
if(k == 1){
    delioci = 1;
}else{
    delioci = 2;
    for(i = 2; i <k/2; i++){
        if(k % i == 0) {
            delioci++;
        }
    }
}
//19
function prostBroj(k){ 
    delioci = 0;
    for(let i =1;i <= k;i++){
    if(k % i == 0){
        delioci++;
        }
    }
    if(delioci == 2){
    console.log(`broj ${k} je prost`);
    }else{
    console.log(`broj ${k} nije prost`);
    }
}
prostBroj(118);
prostBroj(13);
//
k = 22
let prost = true;
for(i = 2; i <= Math.sqrt(k); i++){
    if(k % i == 0){
        prost = false;
        break;
    }
}
if(prost) {
    console.log(`${k} je prost`);
}else{
    console.log(`${k} nije prost`);
}
//20 zadatak
let divtabela = document.getElementById('tabela');
let tabela = `<table>`;
    for(i=0; i <= 6; i++){
        let obojen ="belo"
        if(i % 2 == 0){
            obojen="roze";
        }
        tabela +=
        `<tr class="${obojen}">
            <td>tekst</td>
            <td>tekst</td>
        </tr>`;
    }
tabela += `</table>`;
divtabela.innerHTML = tabela
