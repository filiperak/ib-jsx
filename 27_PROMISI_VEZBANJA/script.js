const form = document.querySelector("#order");
const capasity = document.querySelector("#capasity");
const div = document.querySelector("#result");

/*
1) ODREDITI ARTIKELE JOJI VISE NISU NA STANJU
2) ODREDITI UKUPNU TEZINU SVIH TIH ARTIKALA
3) AKO JE TA TEZINA MANJA OD KAPACITETA KAMIONA, ONDA 
    3.1) ODREDITI I ISPISATI UKUPNU CENU SVIH TIH ARTIKALA
    3.2) ISPISATI PORUKU DA KAMION NEMA TRAZENE KAPACITETE
*/
function getItems(resource,resolve,reject){
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange',function(){
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText);
            resolve(data);
        }
        else if(request.readyState === 4){
            reject('desila se greska')
        }
    });
    request.open('GET',resource);
    request.send();
}

function submitFormVarijanta1(event){
    event.preventDefault();

    //1) ODREDITI ARTIKELE JOJI VISE NISU NA STANJU
    let nizArtikala = [];
    getItems('./JSON/stock.json',(data) => {
        data.forEach(elem => {
            if(elem.stock == 0){
                nizArtikala.push(elem.id);
            }
        });
        console.log(nizArtikala);
        //2) ODREDITI UKUPNU TEZINU SVIH TIH ARTIKALA
        getItems('./JSON/weights.json',(data) => {
            let totalWeight = 0;
            data.forEach(elem => {
                if(nizArtikala.includes(elem.id)) {
                    totalWeight += elem.weight
                }
            });
            //3) AKO JE TA TEZINA MANJA OD KAPACITETA KAMIONA, ONDA 
            if(totalWeight <= Number(capasity.value)){
            //3.1) ODREDITI I ISPISATI UKUPNU CENU SVIH TIH ARTIKALA
                getItems('./JSON/prices.json',(data) => {
                    let totalPrice = 0; 
                    data.forEach(elem => {
                        if(nizArtikala.includes(elem.id)){
                            totalPrice += elem.price;
                        }
                    });
                    div.innerHTML = `Total price of articles: ${totalPrice}`;
                },(msg) => {
                    div.innerHTML = msg;
                });
            }else{
                    //3.2) ISPISATI PORUKU DA KAMION NEMA TRAZENE KAPACITETE
                div.innerHTML = 'NOT ENOUGH CAPACITY IN TRUCK';
            }
        },(msg) => {
            div.innerHTML = msg
        });

    },(msg) => {
        div.innerHTML = msg;
    });
}
//FUNKCIJA SUBMITfORMvARIANTA1 JE POTPUNO TACNA
//PROBLEM: JAKO NEPREGLEDAN, JAKO TESKO ODRZAVANJE-CALLBACK HELL
//CALLBACK HELL MOZE DA SE UBLAZI PROMISIMA
form.addEventListener('submit',submitFormVarijanta1);

