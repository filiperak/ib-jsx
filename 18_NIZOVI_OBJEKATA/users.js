let blog1 = {
    title: 'If naredba grananja!',
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title:'while petlja',
    likes:25,
    dislikes: 36,
};
let blog3 = {
    title: 'for petlja',
    likes: 100,
    dislikes:12
};

let user1 = {
    username:'jelenaMatejic',
    age: 29,
    blogs: [blog1,blog3],
    logBlogs: function(){
        this.blogs.forEach(elem => console.log(elem.title))
    }
};

let user2 = {
    username:'stefanStanimirovic',
    age:34,
    blogs: [blog2],
    logBlogs: function(){
        this.blogs.forEach(elem => console.log(elem.title))
    }
};
//////////////////////////////////////////////////////////////
console.log(user1.blogs[0].title);
console.log(user1.blogs[0]['title']);
console.log(user1['blogs'][0]['title']);
user1.logBlogs()
user2.logBlogs()
//1
let users = [user1,user2];
// ISPIS USERNAME POLJA IZ USERS NIZA
users.forEach(user => {
    console.log(user.username);
});
//ispis svih naslova blogova koje su korisnici kreirali
users.forEach(user => {
    user.logBlogs();
});
// da nisam imao metodu 'logBlogs'
users.forEach(user => {
    let userBlogs = user.blogs;     //niz blogova korisnika
    //iteriram nizom objekata gde je svaki objekat jedan blog
    userBlogs.forEach(user => {
        console.log(user.title);
    })
});
/////////////////////////////////////////////
users.forEach(user => {
    user.blogs.forEach(user => {
        console.log(user.title);
    })
});
//3
users.forEach(u => {
    let userBlogs = u.blogs;
    userBlogs.forEach(u => {
        if(u.likes > 50){
            console.log(u.title);
        }
    });
});
//2 POGRESAN SI RADIO
let avgLikes =(arr) => {
    let sumLajkova = 0;
    let br = 0;
    arr.forEach(u => {
        let blogovi = u.blogs;
        blogovi.forEach(u => {
            sumLajkova += u.likes;
            br++;
        });

    });
    return sumLajkova / br;
}
console.log(avgLikes(users));
//2
users.forEach(u => {
    if(u.age > 18){
        console.log(u.username);
    }
});
//4
users.forEach(u => {
    if(u.username == 'john doe'){
        console.log(u.logBlogs());
    }
});
//5
users.forEach(u => {
    let sumLikes = 0;
    u.blogs.forEach(b => {
        sumLikes += b.likes;
    });
    if(sumLikes > 100) {
        console.log(u.username);
    }
});
//6
let suma = 0;
let br = 0;
users.forEach(u => {
    u.blogs.forEach(b =>{
        suma += b.likes;
        br++;
    });
});
let prosecanBrLajkova = suma / br;

users.forEach(u => {
    u.blogs.forEach(b =>{
        if(b.likes > prosecanBrLajkova){
            console.log(b.title);
        }
    });
});
//7///////////////////////////////////////////////////////////////////////
let dis = 0;
let brd = 0;
users.forEach(u => {
    u.blogs.forEach(b => {
        dis += b.dislikes;
        brd ++;
    });
});
let prosecamBrDislajkova = dis / brd;
//console.log(prosecamBrDislajkova);
//console.log(prosecanBrLajkova);
users.forEach(u => {
    u.blogs.forEach(b => {
        if(b.dislikes < prosecamBrDislajkova && b.likes > prosecanBrLajkova){
            console.log(b.title);
        }
    });
});
/////////////////////////////////////////////////////////////////////////
//2,3,4
let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10, 0]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};
/*
let dani = [dan1,dan2,dan3]
let zadatak2 = (arr) => {
    let brMerenja = 0;
    let maxMerenja = arr[0];
    arr.forEach(elem => {
        //brMerenja +=elem.temperature;
        brMerenja++;
        if(elem.temperature.length >= maxMerenja){
            maxMerenja = elem;
        }
    })
    return maxMerenja
}
console.log(zadatak2(dani));*/
let dani = [dan1,dan2,dan3];

let maxBrMerenja = dani[0].temperature.length;
let indexprvog = 0;
let indexposlednjeg = 0;
dani.forEach((d,index) => {
    if(maxBrMerenja < d.temperature.length){
        maxBrMerenja = d.temperature.length;
        indexprvog = index;
    }
    if(maxBrMerenja <= d.temperature.length){
        maxBrMerenja = d.temperature.length;
        indexposlednjeg = index;
    }
});

//a)ispisatio svaki takav datum
dani.forEach(d => {
    if(d.temperature.length == maxBrMerenja){
        console.log(d.datum);
    }
})
//b) ispisati pvri od njih
//1.nacin
console.log(dani[indexprvog].datum);
//2nacin
for(let i = 0; i < dani.length; i++){
    if(maxBrMerenja == dani[i].temperature.length){
        console.log(dani[i].datum);
        break;
    }
}
//c) ispisati poslednji od njih
console.log(dani[indexposlednjeg].datum);

for(let i = dani.length-1; i > 0; i--){
    if(maxBrMerenja == dani[i].temperature.length){
        console.log(dani[i].datum);
        break;
    }
}
//3
let treciZad = (arr) => {
    let kisan =0;
    let suncan =0;
    let oblacan = 0;
    arr.forEach(elem => {
        if(elem.kisa){
            kisan++;
        }
        if(elem.sunce){
            suncan++;
        }
        if(elem.oblacno){
            oblacan++;
        }
    });
    return `bilo je ${kisan} kisnih, ${suncan} suncanih i ${oblacan} oblacnih dana.`
}
console.log(treciZad(dani));
//4Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
let prosecanDan = (arr) => {
    let suma = 0;
    let br = 0;
    arr.forEach(elem => {
        elem.temperature.forEach(temp => {
            suma += temp;
            br++;
        })
    });
    return suma / br;
}
console.log(prosecanDan(dani));

let iznadProseka = (arr) => {
    let count = 0;
    let prosecan = prosecanDan(arr);
    arr.forEach(elem => {
        let sum = 0;
        let br = 0;
        elem.temperature.forEach(temp => {
            sum+= temp
            br++;
        });
        if(sum/br > prosecan){
            count+= elem.datum+",";
        }

    })
    return count;
}
console.log(iznadProseka(dani));