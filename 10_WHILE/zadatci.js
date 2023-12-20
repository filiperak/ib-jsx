let i = 1;
while(i<=20){
    
    console.log(i);
    i++;
}
//b
i = 1;
let result="";
while(i<=20){
    result=result + i+",";
    i++;
}
console.log(result);
//2
i = 20;
while(i>=1){
    console.log(i);
    i--
}
//drugi nacin
i=1;
while(i<=20){
    console.log(21-i);
    i++
}

//3
i = 1;
while(i<=20){
    i+=1
    console.log(i);
    i++;
}
//drugi nacin

i=1;
while(i <= 20){
    if(i % 2 == 0){
        console.log(i);
    }
    i++
}

//4zadatak

n=1
let pCrveni ='<p style="color: red;">paragraf</p>'
let pZeleni = '<p style="color: red;">paragraf</p>'
let pPlavi = '<p style="color: red;">paragraf</p>'

while(n<=7){
    if(n==1){
        document.write(pCrveni)
    }else if(n % 2 == 0){
        document.write(pZeleni)
    }else if(n%3 == 0){
        document.write(pPlavi)
    }
    n++;
}
//4zadatak
/*
n = 7;
i = 1;
while(i <= n){
    if(i % 3 == 1){
        document.body.innerHTML += `<p class="plava">Paragraf broj ${i}</p>`;
    }else if(i % 3 == 2){
        document.body.innerHTML += `<p class="crvena">Paragraf broj ${i}</p>`;
    }else{
        document.body.innerHTML += `<p class="zelena">Paragraf broj ${i}</p>`;
    }
    i++;
}
*/
n = 7;
i = 1;
while(i <= n){
    let klasa;
    if(i % 3 == 1){
        klasa='plava'
    }else if(i % 3 == 2){
        klasa='crvena'
    }else{
        klasa='zelena'
    }
    document.body.innerHTML +=`<p class="${klasa}">Paragraf broj ${i}</p>`
    i++;
}

////Odrediti sumu brojeva od n do m

n = 1;
let m = 100;
i = n
let sum =null;
while(i <= m){
    sum += i;
    i++
}
console.log(sum);
//Odrediti proizvod brojeva od n do m
n = 10;
m = 15;
i = n
sum = i;
while(i <= m){
    sum *= i;
    i++;
}
console.log(sum);



//Odrediti sumu kvadrata parnih i sumu
// kubova neparnih brojeva od n do m
n = 3;
m = 10;
let sumKvadrata = null;
let sumKub = null;

while(n <= m){
    if(n % 2 == 0){
        sumKvadrata += n * n;
    }else{
        sumKub += n ** 3;
    }
    n++;
}
console.log(`suma kvadrata:${sumKvadrata}, suma kubova ${sumKub}`);

//Odrediti sa koliko brojeva je deljiv uneti broj k

let k = 21;
i = 1;
let brojDeljenika = 0;
while(i <= k){
    let kolicnik = k / i;
    if(Number.isInteger(kolicnik)){
        brojDeljenika ++;
    }
    i++;
}
console.log(brojDeljenika);

//n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

k = 12345678;
i = 0;
brojDeljenika = 0;
while(i <= k){
    let kolicnik = k / i
    if(kolicnik % 1 == 0){
        brojDeljenika ++;
    }
    i++;
}
if(brojDeljenika ==2){
    console.log(`broj ${k} je prost broj`);
}else{
    console.log(`broj ${k} nije prost broj`);
}
console.log(4.5 % 1);


//10
n = 3;
m = 6;
i=n
let kubsum = null;
let kvadratsum =null;
while(i <= m){
    if(i % 2 == 0){
        kvadratsum +=i**2;
    }else{
        kubsum += i**3;
    }
    i++;
}
console.log(`suma kvadrata:${kvadratsum},suma koboja:${kubsum}`);

//11
k = 7;
i = 1;
let brojDelilaca = null;
while(i <= k){
    if(k % i == 0){
        brojDelilaca ++;
    }
    i++;
}
console.log(`broj ${k} je deljiv sa ${brojDelilaca} brojeva`);

//12
k = 17;
i = 1;
brojDelilaca = null;
while(i <= k){
    if(k % i == 0){
        brojDelilaca ++;
    }
    i++;
}
if(brojDelilaca == 2){
    console.log(`broj ${k} je prost`);
}else{
    console.log(`borj ${k} nije prost`);
}
//a
n = 1234;
let sumCifara = null;
while(n>0){
    let cifra = n % 10;
    sumCifara += cifra;
    n = Math.floor(n / 10)
}
console.log(sumCifara);

//b
n = 1234;
sumCifara = null;
let brIteracija=null;
let aritmetickaSredina=null;
while(n>0){
    let cifra = n % 10;
    brIteracija ++;
    sumCifara += cifra;
    n = Math.floor(n / 10)
}
aritmetickaSredina = sumCifara/brIteracija

console.log(aritmetickaSredina);
//
n = 1234;
let obrnuteCifre=[];
while(n>0){
    let cifra = n % 10;
    obrnuteCifre.push(cifra)
    n = Math.floor(n / 10)
}
console.log(obrnuteCifre.join(""));