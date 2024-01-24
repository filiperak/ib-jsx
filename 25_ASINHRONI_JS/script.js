const request = new XMLHttpRequest();
request.addEventListener("readystatechange",function(){
    if(request.readyState === 4 && request.status == 200){
        let data = JSON.parse(request.responseText)
        //console.log(data);
        //console.log(data[5]);
        //console.log(data[5].title);
    }else if(request.readyState === 4){
        console.log('desila se greska');
    }
});
request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();
///////////////////////////////////////////////

const request1 = new XMLHttpRequest();

request1.addEventListener("readystatechange",function(){
    if(request1.readyState === 4 && request1.status == 200){
        let data = JSON.parse(request1.responseText)
        data.forEach(elem => {
            //console.log(elem.name);
            if(elem.name.includes('Clementine') ){
                console.log(elem);
            }
        })
    }else if(request1.readyState === 4){
        console.log('desila se greska');
    }
});
request1.open('GET','https://jsonplaceholder.typicode.com/users');
request1.send();
/////////////////////////////////////////////////////////
const request2 = new XMLHttpRequest();

request2.addEventListener("readystatechange",function(){
    if(request2.readyState === 4 && request2.status == 200){
        let data = JSON.parse(request2.responseText)
        //console.log(data);
        data.forEach(elem => {
            if(elem.company.name.includes('LLC') || elem.company.name.includes('Group')){
                console.log(elem);
            }
        })
    }else if(request2.readyState === 4){
        console.log('desila se greska');
    }
});
request2.open('GET','https://jsonplaceholder.typicode.com/users');
request2.send();
///////////////////////////////////////////////

let request3 = new XMLHttpRequest();
request3.addEventListener('readystatechange',() => {
    if(request3.readyState === 4){
        let data = JSON.parse((request3.responseText));
        data.forEach(elem => {
            if(elem.website.endsWith('.com')){
                console.log(elem);
            }
        })
    }
});
request3.open('GET','https://jsonplaceholder.typicode.com/users');
request3.send()
//////////////////////////////////////////////////////
let request4 = new XMLHttpRequest();
request4.addEventListener('readystatechange',() => {
    if(request4.readyState === 4){
        let data = JSON.parse((request4.responseText));
        data.forEach(elem => {
            console.log(elem.address.city);
        })
    }
})
request4.open('GET','https://jsonplaceholder.typicode.com/users');
request4.send()
///////////////////////////////////////////////
let request5 = new XMLHttpRequest();
request5.addEventListener('readystatechange',() => {
    if(request5.readyState === 4){
        let data = JSON.parse((request5.responseText));
        data.forEach(elem => {
            if(Number(elem.address.geo.lat) < 0 && Number(elem.address.geo.lat) < 0){
                console.log(elem);
            }
        })
    }
})
request5.open('GET','https://jsonplaceholder.typicode.com/users');
request5.send();