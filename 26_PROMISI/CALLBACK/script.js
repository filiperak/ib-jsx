let mojaFunkcija = (callback) => {
    callback();
}

mojaFunkcija(() => {
    console.log('callback funkcija okidanje');
});
//////////////////////////////////////
//1. nacin
let sabiranje = funkcija => {
    funkcija(4,5);
}

sabiranje((a,b) => {
    console.log(a + b);
})
/////////////////////////////
//2.nacin
function stampajSumu(x,y) {
    console.log(x+y);
}
sabiranje(stampajSumu)
///////////////////////////////////
let racunaj = (f) => {
    let razlika = f(100,30);
    console.log(razlika);
}
racunaj((a,b) => {
    return a-b;
});
racunaj((a,b) => a * b)
