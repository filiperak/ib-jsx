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

async function clickGEtItems(){
    let data1 = await getItemsReturnPromise('./JSON/stock.json');
    let nizArtikala = [];
    data1.forEach(elem => {
        if(elem.stock == 0){
            nizArtikala.push(elem.id)
        }
    })
    
    let data2 = await getItemsReturnPromise('./JSON/weights.json')
    let totalWeigth = 0;
    data2.forEach(elem => {
        if(nizArtikala.includes(elem.id)){
            totalWeigth += elem.weight;
        }
    })
    if(totalWeigth <= Number(capasity.value)) {
        let data3 = await getItemsReturnPromise('./JSON/prices.json');
        let totalPrice = 0; 
        data3.forEach(elem => {
            if(nizArtikala.includes(elem.id)){
                totalPrice += elem.price;
            }
        });
        return totalPrice;
    }else{
        return 'NOT ENOUGH CAPACITY IN TRUCK';
    }
}

function submitFormVarijanta3(e){
    e.preventDefault();
    clickGEtItems()
    .then(data => {
        div.innerHTML = data;
    })
    .catch(err => {
        div.innerHTML = `Greska ${err}`;
    });
}
form.addEventListener('submit', submitFormVarijanta3);
