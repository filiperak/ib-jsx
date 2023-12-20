//zadatak 2

let niz = [110,999,8,7,1,5,9,11,82,4];
let niz2 = [10,-5,0,-3];
let niz3 = [1,2,3,4,5,6];

let sumElem = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum +=arr[i]
    }
    return sum;
}
console.log(sumElem(niz));
console.log(sumElem(niz2));
console.log(sumElem(niz3));

//3
let proizvodElem = (arr) => {
    let proizvod = 1;
    for(let i = 0; i < arr.length;i++){
        proizvod *= arr[i]
    }
    return proizvod;
}
console.log(proizvodElem(niz2));
//4
let arSredina = (arr) => {
    let suma = sumElem(arr);
    return suma / arr.length;
}


///4a
let srVrParni = (arr) => {
    let suma = 0;
    let parnni = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            suma += arr[i];
            parnni ++;
        }
    }
    let srvrpr = suma / parnni;
    return arr.length !=0? srvrpr:0;
}
console.log(srVrParni([1,3,5,9]));


let srvr2 = ( arr) => arr.length != 0? sumElem(arr)/arr.length:0;


let arSredina2 = (arr) => sumElem(arr) / arr.length;



console.log(arSredina(niz3));
//5
let maxVal = (arr) =>{
    let maxBroj = arr[0];
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > maxBroj){
            maxBroj = arr[i]
        }
    }
    return maxBroj;
}
console.log(maxVal(niz));
//
let maxNiza = (arr) =>  {
    let maxelement = arr[0];
    for(let i = 1; i < arr.length;i++){
        if(arr[i] > maxelement){
            maxelement = arr[i];
        }
    }
    return maxelement;
}
//6
let minVal = (arr) => {
    let minBroj = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minBroj){
            minBroj = arr[i];
        }
    }
    return minBroj;
}
console.log(minVal(niz2));
/*
let test = niz.indexOf(82)
console.log(test);*/
//Odrediti indeks maksimalnog elementa celobrojnog niza.
let maxIndex = (arr) => {
    let maxBroj=arr[0];
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > maxBroj){
            maxBroj = arr[i]
        }
    }
    return arr.indexOf(maxBroj);

}
console.log(maxIndex(niz));
//7

let indMaxNiza = (arr) => {
    let max = arr[0];
    let index = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max) {
            max = arr[i];
            index  = i;
        }
    }
    return index;
}
console.log(indMaxNiza([9,6,8,1,5]));
//
let minIndex = (arr) =>{
    let minBroj=arr[0];
    let minIndex = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < minBroj){
            minBroj = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}
console.log(minIndex(niz));
//9
let veciOdARSredine = (arr) =>{
    let veci = 0;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] > srvr2(arr)){
            veci++;
        }
    }
    return veci;
}
console.log(veciOdARSredine(niz));
//10
let pozitivni = (arr) => {
    let sumPozitivnih = 0;
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > 0){
            sumPozitivnih += arr[i]
        }
    }
    return sumPozitivnih;
}
console.log(pozitivni(niz2));
//11
let parniNiz = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length;i++){
        if(arr[i] % 2 == 0 && i !=0){
            sum++;
        }
    }
    return sum;
}
console.log(parniNiz([10,-5,0,-3,2,6,-2]));
//12
let parniSaNeparnimIndexom = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0 && i % 2 == 0 && i != 0 ){
            sum++;
        } 
    }
    return sum;
}
console.log(parniSaNeparnimIndexom( [10,-5,0,-3]));
//let niz2 = [10,-5,0,-3];
//13
let sumaParnih = (arr) => {
    sum = 0;
    for(let i = 0;i < arr.length;i++){
        if(i % 2 == 0){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumaParnih([2,1,6,5,10]));
//14
//
let promenaZnaka2 = (arr) => {
    let obrnutNiz=[]
    for(let i = 0; i < arr.length; i++){
        obrnutNiz.push(arr[i] * (-1))
    }
    return obrnutNiz;
}
console.log(promenaZnaka2([1,-2,2,-9,8,-10,0]));
//
let promenaZnaka3 = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        arr[i] *=(-1);
    }
    return arr;
}
console.log(promenaZnaka3([1,2,3,4,5]));
//15
let neparanZnak = (arr) => {
    let noviNiz = [];
    let index = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1 && i % 2 == 0 && i !=0){
            noviNiz.push(arr[i] * (-1)) //+= arr[i] * (-1) +",";
        }else{
            noviNiz.push(arr[i]); //+= arr[i]+",";
        }
        index++;
    }
    return noviNiz;
}
let niz5= [3,2,4,9,5,8,7,6];
console.log(neparanZnak(niz5));
console.log(neparanZnak(niz));

console.log('-----------------------------');
console.log('-----------------------------');

let neparanZnak2 = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0 && i % 2 == 0 && i !=0){
            arr[i]=(arr[i] * (-1));
        }else{
            arr[i]=(arr[i]);
        }
    }
    return arr;
}
console.log(neparanZnak2(niz5));
//////////////////////////////////////////
//////////////////////////////////////////
let neparanZnak3 =(arr) => {
    for(let i = 0; i < arr.length; i+=2){
        if(arr[i] % 2 != 0){
            arr[i]=arr[i] * (-1);
        }
    }
}
//////////////////////////////////////////
//////////////////////////////////////////