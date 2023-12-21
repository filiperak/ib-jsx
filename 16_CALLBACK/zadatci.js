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
//7
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