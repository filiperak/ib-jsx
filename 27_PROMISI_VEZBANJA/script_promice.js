const form = document.querySelector("#order");
const capasity = document.querySelector("#capasity");
const div = document.querySelector("#result");

function getItemsReturnPromise(resource){
    return new Promise((resolve,reject) => {
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
    });
}

function submitFormVarijanta2(event) {
    event.preventDefault();
    let nizArtikala = [];
    getItemsReturnPromise('./JSON/stock.json')
    .then(data => {
        data.forEach(elem => {
            if(elem.stock == 0){
                nizArtikala.push(elem.id);
            }
        });
        return getItemsReturnPromise('./JSON/weights.json');
    })
    .then(data => {
        let totalWeigth = 0;
        data.forEach(elem => {
            if(nizArtikala.includes(elem.id)){
                totalWeigth += elem.weight;
            }
        })
        if(totalWeigth <= Number(capasity.value)){
            return getItemsReturnPromise('./JSON/prices.json');
        }else{
            div.innerHTML = 'NOT ENOUGH CAPACITY IN TRUCK';
        }
    })
    .then(data => {
        if(data !== undefined){
            let totalPrice = 0; 
            data.forEach(elem => {
                if(nizArtikala.includes(elem.id)){
                    totalPrice += elem.price;
                }
            })
            div.innerHTML = `Total price of articles: ${totalPrice}`;
        }
    })
    .catch(msg => {
        div.innerHTML = msg;
    });
}

form.addEventListener('submit',submitFormVarijanta2);