const liElementi = document.querySelectorAll('li');
liElementi.forEach(elem => {
    elem.addEventListener('click',()=> {
        elem.classList.toggle('precrtaj');
    })
});