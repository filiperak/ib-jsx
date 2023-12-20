function neparan(n){
    let x;
    if( n %  2 == 1){
        x = true;
    }else{
        x = false;
    }
    return x;
}
console.log(neparan(8));

function neparan2(n){
    if(n % 2 == 1){
        var x = true; //var je dostupan unutar funkcije u kojoj je deklarisana
        {
            let x = 5;
        }
    }else{
        var x = false;
    }
    var x;
    return x;
}
console.log(neparan2(7));

let neparan3 = (n) =>{
    let x = false;
    if(n % 2 == 1){
        x = true;
    }
    return x;
}

let neparan4 = (n) =>{
    return (n % 2 ==1) ? true:false;
}
console.log(neparan4(7));
/*
let radniDan = () =>{
    let dan = new Date();
    let day = dan.getDay();
    return(day == 0 || day == 6)?'vikend':'radni dan';
}
console.log(radniDan());
document.body.innerHTML += radniDan();*/

let neparan5 = (n) => {
    return ( n % 2 == 1);
}
console.log(neparan5(9));

let neparan6 = n => (n % 2 == 1);
console.log(neparan6(6));

let uvecajZaDva = n => n+=2;
console.log(uvecajZaDva(10));

let maks2=  (a,b) => (a > b) ? a:b;
console.log(maks2(8,6));
//////////////////////
let maks4 = (a,b,c,d) =>{
    let prvipar = maks2(a,b);
    let drugiPar = maks2(c,d);
    return maks2(prvipar,drugiPar);
}
console.log(maks4(60,91,92,9));
////////////////////////
/*let maks42 = (a,b,c,d) => maks2(maks2(a,b),maks2(c,d));
console.log(maks42(8,4,9,2));*/
///////////////////////
let slika = (putanja) => `<img src="${putanja}" >`;
//document.write(slika('/11_FOR/slike/1.jpeg'));

//
let divSlika = document.querySelector('#drugizadatak');
divSlika.innerHTML += slika('/11_FOR/slike/1.jpeg');
//divSlika.innerHTML += slika('/11_FOR/slike2.jpeg');
divSlika.innerHTML += slika('/11_FOR/slike/3.jpeg');
document.body.innerHTML += slika('/11_FOR/slike/1.jpeg');


let maks42 = (a,b,c,d) => maks2(maks2(a,b),maks2(c,d));
console.log(maks42(8,4,9,2));