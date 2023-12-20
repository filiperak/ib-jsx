let cars = ['toyota','bmw','volvo']
console.log(cars);
let razno = [15,-3.5,'hello',false,[11,12,13]];
console.log(razno[0]);
console.log(razno[4][1]);
let list = []
console.log(list);
list[3] = 'niz test';
list[1] = 'prvi'
console.log(list);

for(let i in list){
    console.log(list[i]);
}
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}
console.log(cars.length);
for(let i = 0; i < razno.length; i++){
    console.log(razno[i]);
}
for(let i = 0; i < razno[4].length; i++){
    console.log(razno[4][i]);
}

let brojevi = [4,3.5,8,10];
/*let uvecanji  = brojevi.forEach(i*1.1)
console.log(uvecanji);*/
for(let i = 0; i < brojevi.length;i++){
    brojevi[i]*=1.1;
}
for(let i = 0; i < brojevi.length;i++){
    console.log(brojevi);
}