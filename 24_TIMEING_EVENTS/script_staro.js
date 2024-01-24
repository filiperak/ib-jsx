window.setTimeout(()=> console.log('poruka ispisana posle 3 sekunde'),3000)
console.log(1);
console.log(2);

window.setTimeout(() => {
    console.log('poruka ispisana nakon nekog vremena');
},2000);

console.log(3);
console.log(4);

const btn1 = document.getElementById('btn1');
const div = document.getElementById('ispis');
const btn2 = document.getElementById('btn2');
let timer = null;


btn1.addEventListener('click', (e) => {
    e.preventDefault();
    let datum = new Date();
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();
    if(timer === null){
        timer = setTimeout(function() {
            div.innerHTML += `${h}:${m}:${s}`;
            timer = null;
        },2000);
    }
});

btn2.addEventListener('click',function(e){
    e.preventDefault();
    clearTimeout(timer);
    timer = null;
});