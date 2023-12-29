let blog1 = {
    title: 'HTML',
    content: 'osnovni html tagovi',
    autor: 'jelena',
    likes: 10,
    comments: true
};
//ispis objekta
console.log(blog1);
console.log(typeof blog1);
//ispis odredjene osobine
console.log(blog1.title);
console.log(blog1.autor);
console.log(blog1['content']);
//izmena odredjene osobine
blog1.content = 'HTML tabele';
console.log(blog1.content);
blog1['content'] = 'HTML liste';
console.log(blog1.content);
blog1.likes = 7;
console.log(blog1);
///////////////////////////////////////
let user1 = {
    username: 'jelenaMatejic',
    age: 29,
    nextAge: this.age + 1,
    blogs: ['Naredba Grananja','nizovi','objekti'],
    login: function(){
        console.log('ulogovani ste');
        console.log(this);
    },
    logout: function(){
        console.log('izlogovani ste');
    },
    logBlogs: function(){
        this.blogs.forEach(element => {
            console.log(element);
        });
    },
    hallo: function(){
        return `hallo ${this.username}`
    }
};
user1.login();
user1.logout();
user1.logBlogs();
console.log(this);

user1.blogs.forEach(blog => {
    document.write(`<p>${blog}</p>`)
})
/////////////////////////
let dan1 = {
    datum: '2023/12/22',
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature:[3,4,6,7,6,4],
    //1
    prosecna: function(){
        let suma = 0;
        this.temperature.forEach(t => {
            suma+= t;
        });
        return suma / this.temperature.length;
    },
    //2
    brNadprosecnih: function(){
        let br = 0;
        let pros = this.prosecna();
        this.temperature.forEach(t => {
            if(t > pros){
                br++;
            }
        });
        return br;
    },
    brMaks: function(){
        let br = 0;
        let maxTemp = this.temperature[0];
        this.temperature.forEach(temp => {
            if(temp >= maxTemp){
                maxTemp=temp;
            }
        });
        this.temperature.forEach(temp => {
            if(temp == maxTemp){
                br++;
            }
        })
        return br;
    },
    menjanjeTemp: function(x,y){
        let br = 0;
        if(x > y){
            let pom = x;
            x = y;
            y = pom;
        }
        this.temperature.forEach(temp => {
            if(temp > x && temp < y){
                br++;
            }
        });
        return br;
    },
    tempVecinaDana: function(){
        let vecinaDana = false;
        let br = this.brNadprosecnih();
        if(br > this.temperature.length /2){
            vecinaDana = true;
        }
        return vecinaDana;
    },
    leden: function(){
        let ledenDan = true;
        this.temperature.forEach(temp => {
            if(temp > 0){
                ledenDan = false;
            }
        });
        return ledenDan;
    },
    leden2: function(){
        let ledenDan = true;
        for(let i = 0 ; i < this.temperature.length;i++){
            if(this.temperature[i] > 0){
                ledenDan = false;
                break;
            }
        }
        return ledenDan;
    },
    leden3: function(){
        for(let i = 0 ; i < this.temperature.length;i++){
            if(this.temperature[i] > 0){
                return false;
            }
        }
        return true;
    },
    nepovoljan: function(){
        for(let i = 0; i < this.temperature.length-1;i++){
            if(Math.abs(this.temperature[i] - this.temperature[i+1]) > 8){
                return true;
            }
        }
        return false;
    }

};
console.log(`prosecna temperatura je ${dan1.prosecna()}`);
console.log(`broj nadprosecnih merenja u danu je ${dan1.brNadprosecnih()}`);
console.log(dan1.menjanjeTemp(4,7));
console.log(dan1.brMaks());
console.log(dan1.leden());
console.log(dan1.tempVecinaDana());
console.log(dan1.nepovoljan());

