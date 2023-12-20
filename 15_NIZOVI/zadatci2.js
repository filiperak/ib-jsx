//19
//test primeri
let imena = ['stefan','jelena','marko','milos','bratislav','ljiljana','ana','Aleksa'];
//
//
let duziaSvakogElementa = (niz) => {
    for(let i = 0; i < niz.length; i++){
        console.log(niz[i].length);
    }
}
duziaSvakogElementa(imena);
//
//Odrediti element u nizu stringova sa najvećom dužinom.
let najduzi = (niz) => {
    let maxLength  = niz[0].length;
    for(let i = 1; i < niz.length; i++){
        if(niz[i].length > maxLength){
            maxLength = niz[i];
        }
   }
   return maxLength;
}
console.log(najduzi(imena));

//Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let prosek = (niz) => {
    let sum=0;
    for(let i = 0; i < niz.length; i++){
        sum+=niz[i].length;
    }
    return sum / niz.length;
}
let veciOdProseka=(niz) => {
    let veciOd=prosek(niz);
    let veci = 0;
    for(let i = 0; i < niz.length;i++){
        if(niz[i].length > veciOd){
            veci++;
        }
    }
    return veci;
}
console.log(veciOdProseka(imena));
//

let includesA = (niz) => {
    let sum=0;
    for(let i = 0;i < niz.length;i++){
        for(let j = 0;j < niz[i].length;j++){
            if(niz[i][j] == ('a')){
                sum++;
                break;
            }
        }
    }
    return sum;
}
console.log(includesA(imena));

//
let includes2 =(niz) => {
    let sum= 0;
    for(let i = 0; i < niz.length;i++){
        if(niz[i].includes('a') || niz[i].includes('A')){
            sum++;
        }
    }
    return sum;
}
console.log(includes2(imena));
//
let includes3 =(niz) => {
    let sum= 0;
    for(let i = 0; i < niz.length;i++){
        if(niz[i][0] == ('a') || niz[i][0] == ('A')){
            sum++;
        }
    }
    return sum;
}
console.log(includes3(imena));
//
let includes4 =(niz) => {
    let sum= 0;
    for(let i = 0; i < niz.length;i++){
        if(niz[i].startsWith('a') || niz[i].startsWith('A')){
            sum++;
        }
    }
    return sum;
}
console.log(includes4(imena));
//
////////////////////////////////////
//24

let q =[1,2,3,4,5,6]
let w = [7,8,9,10,11,12,13,14,15]
let zad24 = (a,b) => {
    let n = a.length; // n = b.length
    let c = [];
    for(let i = 0; i < n; i++){
        c.push(a[i],b[i]);
    }
    return c;
}
let zad24b = (a,b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i ++){
        c[2 * 1] = a[i];
        c[2 * i +1] = b[i];
    }
    return c;
}
//25
let zad25 = (a,b) => {
    let n = a.length
    let c = [];
    for (let i = 0; i < n; i++) {
        c.push(a[i]*b[i])
    }
    return c;
}
console.log(zad25(q,w));
//226

let $26 = (a) => {
    let n = a.length;
    let b = [];
    for(let i = 1; i < n; i++){
        b.push(a[i]+a[2+n -1 -i])/2;
    }
    return b;
}
console.log($26(w));