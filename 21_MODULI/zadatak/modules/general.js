let generateImage = (src) => {
    let img = document.createElement('img');
    img.src = src;
    img.alt = 'alternativniTekst';
    img.style.width = '200px';
    return img;
}
export  {generateImage} ;