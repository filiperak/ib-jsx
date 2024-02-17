
let getJSON = (resource) => {
    const request = new XMLHttpRequest();
    request.open("GET",resource);
    request.send();

    let promise = new Promise((resolve,reject) => {
        request.addEventListener("readystatechange",() => {

            if(request.readyState === 4 && request.status == 200){
                let data = JSON.parse(request.responseText)
                resolve(data);

            }else if(request.readyState === 4){
                reject('Doslo je do greske');
            }
        });
    });
    return promise;
}
///////////////////////////////////
getJSON('../JSON/prvi.json').then( sadrzaj => {
    console.log('Prvi.json',sadrzaj);
    return getJSON('../JSON/drugi.json')                   //vraca instancu promise, koja moze imati .then i .catch
}).then(sadrzaj2 => {
    console.log('drugi.json',sadrzaj2);                 //ako je drugi.json resolved onda ispisuje njegove podatke
    return getJSON('../JSON/treci.json')
}).then(sadrzaj3 => {
    console.log('treci json',sadrzaj3);
})
.catch(greska => {
    console.log('greska u fajlu',greska);                  //ako je bilo koj bio rejected upasce u catch granu
});

/*getJSON('../JSON/prvi.json', (data,err) => {
    if(data){
        console.log(data);                                              // sve je proslo okej u prvi.jsoni vraca podatke iz prvi.json
                                                                        //ako je sve bilo okej sa prvim fajlom onda uzmi drugi fajl
        getJSON('../JSON/drugi.json', (data,err) => {
            if(data){
                console.log(data);                                        // sve je proslo okej u drugi.json i vraca podatke iz drugi.json
                getJSON('../JSON/treci.json', (data,err) => {
                    if(data){
                        console.log(data);                                       // sve je proslo okej u treci.json i vraca podatke
                    }else {
                        console.log(err);                                       // ispisuje gresku iz treci.json
                    }
                });
            }else {
                console.log(err);                                                       // ispisuje gresku iz drugi.json
            }
        });
    }else {
        console.log(err);                                               // ispisuje gresku
                                                                      //ispisuje gresku iz prvi.json
    }
});
///////////////////////
*/
console.log('kraj fajla');

