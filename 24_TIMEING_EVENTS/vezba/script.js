const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const inputCount = document.querySelector("#inpCouunt");

let counter; 
btn1.addEventListener('click',(e) => {
    e.preventDefault();
    if(counter === undefined){   
        counter = setInterval(()=> inputCount.value++ ,500);
    }
});

btn2.addEventListener('click',(e)=> {
    e.preventDefault();
    clearInterval(counter);
    counter = undefined; 
    
})

//event.stopPropagation()   BITNO - EVENT BOUBLEING