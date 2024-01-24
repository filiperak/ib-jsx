
let getJSON = (resource, callback) => {
    //kreiranje xml objekta
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange",() => {
        if(request.readyState === 4 && request.status == 200){
            //sve okej
            let data = JSON.parse(request.responseText)
            callback(data,undefined);
        }else if(request.readyState === 4){
            callback(undefined,'desila se greska');
        }
    });
    // 2. otvaramo kreirani zahtev
    request.open("GET",resource);
    //3.slanjezahteva
    request.send();
}

getJSON('../JSON/prvi.json', (data,err) => {
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


console.log('kraj fajla');

