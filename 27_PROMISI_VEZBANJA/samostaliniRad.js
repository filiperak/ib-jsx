//BONUS VARIJANTA: Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala.
//Odrediti koji proizvodi više nisu na stanju i koje treba poručiti. Pretpostavljamo da se naručuje po jedna količina svakog artikla koji nije na stanju.
//b.	Ako je težina svih proizvoda koje treba poručiti veća od kapaciteta kamiona, ispisati poruku “Not enought capacity in truck!!“.
//c. 	U suprotnom, ispisati ukupnu cenu svih artikala koje treba naručiti.
const form = document.querySelector("#order");
const capasity = document.querySelector("#capasity");
const div = document.querySelector("#result");

let getJSON = (url) => {
    return new Promise((resolve,reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange',() => {
            if(request.readyState === 4 && request.status === 200){
                let data = JSON.parse(request.responseText)
                resolve(data);
            }else if(request.readyState === 4){
                reject('ERROR!')
            }
        })
        request.open('GET',url);
        request.send();                 
    });
}
function requestGetJson(e){
    e.preventDefault();
    let arrArticle = [];
    getJSON('./JSON/stock.json')
    .then(data => {
        data.forEach(elem => {
            if(elem.stock == 0){
                arrArticle.push(elem.id);
            }
        })
        return getJSON('./JSON/weights.json')
    })
    .then(data => {
        let totalWeight = 0;
        data.forEach(elem => {
            if(arrArticle.includes(elem.id)){
                totalWeight += elem.weight;
            }
        })
        if(totalWeight < Number(capasity.value)){
            return getJSON('./JSON/prices.json')
        }else{
            div.innerHTML = 'NOT ENOUGH CAPACITY'
        }
    })
    .then(data => {
        if(data !== undefined){
            let totalPrice = 0;
            let tabela = document.createElement('table');
            data.forEach(elem => {
                if(arrArticle.includes(elem.id)){
                    totalPrice += elem.price;
                    console.log(elem.item,elem.price);
                    let tr = document.createElement('tr');
                    let td1 = document.createElement('td');
                    td1.innerHTML = elem.item;
                    let td2 = document.createElement('td');
                    td2.innerHTML = elem.price;
                    tr.append(td1,td2);
                    tabela.appendChild(tr);

                }
            })
            let trUkupno = document.createElement('tr');
            let td3 = document.createElement('td');
            td3.innerHTML = 'UKUPNO';
            let td4 = document.createElement('td');
            td4.innerHTML = totalPrice;
            tabela.append(td3,td4)
            document.body.appendChild(tabela)
            //div.innerHTML = totalPrice;
        }
    })
    .catch(poruka => div.innerHTML = poruka);
}

//BONUS VARIJANTA: Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala.
form.addEventListener('submit',requestGetJson)