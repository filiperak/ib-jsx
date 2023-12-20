// 12 zadatak

let br1 = 10;
let br2 = 16;

if(br1 > br2) {
    console.log(`veci broj je ${br1}, a manji je ${br2}`);
    //ispitujemo da li je veci broj paran
    if(br1 % 2 == 0) {
        console.log(`veci broj je paran`);
    }else {
        console.log(`veci broj nije paran`);
    }

    if(br2 % 3 == 0) {
        console.log(`manji br je deljiv sa 3`);
    }else {
        console.log(`manji broj nije deljiv sa 3`);
    }
}else {
    console.log(`verci broj je ${br2}, a manji ${br1}`);

    //ispitujemo da li je veci broj paran
    if(br2 % 2 == 0) {
        console.log(`veci broj je paran`);
    }else {
        console.log(`veci broj nije paran`);
    }

    if(br1 % 3 == 0) {
        console.log(`manji br je deljiv sa 3`);
    }else {
        console.log(`manji broj nije deljiv sa 3`);
    }
}

//13
let d1 = 15;
let m1 = 5;
let g1 = 2010;
let d2 = 15;
let m2 = 5;
let g2 = 2010;

if(g1 < g2){
    console.log(`datum ${g1}.${m1}.${d1} je raniji`);
}else if(g1 == g2){
    console.log(`godinne su jednake`);
    if(m1 < m2){
        console.log(`datum ${g1}.${m1}.${d1} je raniji`);

    }else if(m1 == m2){
        console.log(`meseci su jednake`);
        if(d1 < d2){
            console.log(`datum ${g1}.${m1}.${d1} je raniji`);

        }else if(d1 == d2) {
            console.log(`isti datum`);
        }else{
            console.log(`datum ${g2}.${m2}.${d2} je raniji`);

        }

    }else{
    console.log(`datum ${g2}.${m2}.${d2} je raniji`);
}
}else{
    console.log(`datum ${g2}.${m2}.${d2} je raniji`);
} 
//14
let m = false;
let godine = 12;
if(m == true){
    console.log(`musko`);
    if(godine >= 18) {
        console.log(`musko i punoletan`);
    }else{
        console.log(`musko i malolettan`);
    }
}else{
    console.log(`zensko`);
    if(godine >= 18) {
        console.log(`zensko i punoletna`);
    }else {
        console.log(`zensko i maloletna`);
    }
}

//12
let num1=20;
let num2=15;
let veci;
let manji;
if(num1>num2){
    veci = num1
}
if(veci%2==0){
    console.log(`num1 je deljiv sa 2`);
}
//zadata