//test primeri
let a = [6,8,11,9,3,1];
//2
let sumaElemanata = (arr) => {
    suma = 0;
    arr.forEach(elem => {
        suma += elem;
    });
    return suma;
}
console.log(sumaElemanata(a));
//5
let maxVr = (arr) => {
    let max = arr[0];
    arr.forEach(elem => {
        if(elem > max){
            max = elem;
        }
    });
    return max;
}
console.log(maxVr(a));
//3
let proizvodNiza = (arr) => {
    let proizvod = 1;
    arr.forEach(elem => proizvod *= elem);
    return proizvod;
}
console.log(proizvodNiza(a));
//4
let srVrednost = (arr) => {
    let sum =0;
    arr.forEach((elem)=> sum+= elem)
    return sum / arr.length;
}
console.log(srVrednost(a));
//6
let minVr = (arr) => {
    let min = arr[0];
    arr.forEach(elem => {
        if(elem < min){
            min = elem;
        }
    });
    return  min;
}
console.log(minVr(a));
///////7
let maxIndex = (arr) => {
    let MaxI = 0;
    let Max=arr[0];
    arr.forEach((elem,i) => {
        if(elem > Max){
            MaxI = i;
        }
    })
    return MaxI;
}
console.log(maxIndex(a));
console.log(maxIndex([9,5,6,9,8,9,9]));
//
////////PROVERI OVO!!!!!!!!!!!!!!!
let sviMaxIndex = (arr) => {
    let MaxI = [];
    let Max=maxVr(arr);
    arr.forEach((elem,i) => {
        if(elem == Max){
            MaxI.push(i);
        }
    })
    return MaxI;
}
console.log(sviMaxIndex([3,5,6,9,9,4,4,9,5]));
//8
let minIndex = (arr) => {
    let minI = 0;
    let min = arr[0];
    arr.forEach((elem,ind)=> {
        if(elem < min){
            minI = ind;
        }
    });
    return minI;
}
console.log(minIndex(a));
//9
let veciOdSr = (arr) => {
    let brVecih = 0;
    let srednjaVrednost = srVrednost(arr)
    arr.forEach(elem => {
        if(elem > srednjaVrednost){
            brVecih++;
        }
    });
    return brVecih;
}
console.log(veciOdSr(a));
//10
let zbirPozitivnihElemenata = (arr) => {
    let zbir = 0;
    arr.forEach(elem => {
        if(elem > 0){
            zbir += elem;
        }
    });
    return zbir;
}
console.log(zbirPozitivnihElemenata(a));
//19
let duzinaSvihStringova = (arr) =>{
    arr.forEach(elem => console.log(elem.length))
}
let imena =['stefan','vladislav','nikola','milan','maja'];
duzinaSvihStringova(imena);
///20
let stringMaxDuzina = (arr) => {
    let maxVr = arr[0];
    let duzina = arr[0].length;
    arr.forEach(elem => {
        if(elem.length > duzina){
            maxVr = elem;
            duzina = elem.length;
        }
    });
    return [maxVr,duzina]
}
console.log(stringMaxDuzina(imena));
//24
let zad24 = (a,b) =>  {
    let c = [];
    a.forEach((elem,ind) => {
        //c.push(a[ind],b[ind])
        c.push(elem,b[ind])
    });
    return c;
}
let n1=[2,3,4,5,6]
let n2 = [7,8,9,5,4]
console.log(zad24(n1,n2));
//25
let zad25for = (a,b) => {
    let n = a.length;
    let c=[];
    for(let i = 0; i < n; i++){
        c[i] = a[i]*b[i]; //c.push(a[i]*b[i])
    }
    return c;
}
console.log(zad25for(n1,n2));

//25 foreach
let zad25forEach = (a,b) => {
    let c = [];
    a.forEach((elem,ind) => {
        c.push(elem * b[ind]);
    });
    return c
}
console.log(zad25forEach(n1,n2));
//26
// b[i]= (a[i] + a[2n-1-i]) /2

let zad26For = (a) => {
    let k = a.length;
    let n =k / 2;
    let b = [];
    for(let i = 0; i < n; i++){
        b[i]= (a[i]+a[2*n-1-i]) / 2;
    }
    return b;
}
let n3 = [5,8,0,6,9,4,5,8,11,22,13,6,4,5];
console.log(zad26For(n3));

//26forEach
let zad26ForEach = (a) => {
    let b =[];
    let k = a.length;
    let n = k / 2;
    a.forEach((elem,ind) => {
        if ( elem <= n){
            b[ind] = (a[ind] + a[2*  n-1-ind]) /2;
        }
    });
    return b;
}
console.log(zad26ForEach(n3));
