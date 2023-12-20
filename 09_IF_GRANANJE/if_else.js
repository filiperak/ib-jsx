let a = -5;
let b = 5;
if(a > b) {
    console.log("a je vece od b");
} else {
    console.log("a nije vece od b");
}

//zadatak 1
let zapremina = 120;
if(zapremina <= 100) {
    document.write("<p style='color:green'>Pack up</p>");
}else{
    document.write("<p style='color:red'>Throw away</p>")
}
document.write("<h3 style=\"color:blue\">blabla</h3>")

///zadatak 3


let datum = new Date();
let godina = datum.getFullYear();
let godRodj  = 2009;
let imaGodina = godina - godRodj;
if(imaGodina ==18) {
    console.log('osoba ove godine postaje punoletna punoletna');
    document.write('<img src="torta.jpeg">');
} 
if(imaGodina < 18) {
    console.log('osoba je maloletna');
    let ostalo_do_punoletstva = 18 - imaGodina;
    document.write(`Do punoletstva je ostalo ${ostalo_do_punoletstva} godina`);
}


//zadatak 2
let temperatura=-15;
if(temperatura >=0) {
    let paragraf = document.querySelector("#temp");
    paragraf.innerHTML="Temperaturra je u <b>plusu</b>";
    paragraf.style.color = "red";
}else {
    let paragraf = document.querySelector("#temp");
    paragraf.innerHTML="Tmperatura je u <b>minusu</b>";
    paragraf.style.color= "blue";
}
//zadatak  4

let date= new Date();
let sati=date.getHours();

//console.log(sati);
if(sati <= 12){
    document.write('<p>PREPODNE</p>');
}else{
    document.write('<p>POSLEPODNE</p>')
}
// zadatak5

let pol = "ž";
if(pol == "ž") {
    document.write(`<img src="">`);
}else {
    document.write(`<img src="">`);
}

////////////////ELSE IF///////////////////

