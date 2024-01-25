const form = document.querySelector("#form");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const text = document.querySelector("#text");
const div = document.querySelector("#ispis-tabele")

let getJSON = (url) => {
    return new Promise((resolve,reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                let data = JSON.parse(request.responseText);
                resolve(data);
            }else if(request.readyState === 4){
                reject('ERROR!!')
            }
        })
        request.open('GET',url);
        request.send();
    });
}
function requestGetJSON(e){
    e.preventDefault();
    div.innerHTML = '';
    let itemArr = [];
    getJSON('./JSON/stock.json')
    .then(data => {
        data.forEach(elem => {
            if(elem.stock != 0){
                itemArr.push(elem.id)
            }
        })
        return getJSON('./JSON/prices.json')
    })
    .then(data => {
        console.log(itemArr);
        let tabela = document.createElement('table');
        data.forEach(elem => {
            if(itemArr.includes(elem.id)){
                if(elem.item == text.value){
                    if(elem.price >= Number(num1.value) && elem.price <= Number(num2.value)){
                        console.log(elem.item, elem.price);
                        let tr = document.createElement('tr');
                        let td1 = document.createElement('td');
                        td1.innerHTML = elem.item;
                        let td2 = document.createElement('td');
                        td2.innerHTML = elem.price;
                        //let td3 = document.createElement('td');
                        tr.append(td1,td2);
                        tabela.appendChild(tr);
                        div.appendChild(tabela)

                    }else{
                        div.innerHTML = 'ITEM NOT FOUND'
                    }
                }
            }
        })
    })
    .catch(poruka => console.log(poruka))
}

form.addEventListener('submit',requestGetJSON)