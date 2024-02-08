class Chatroom {
    constructor(room,username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    set room(room){
        this._room = room
    }
    set username(username){
        if(username.length > 2 && username.length <= 10 && username.trim().length !=0){
            this._username = username;
        }else{
            alert('invalid username')
        }
    }
    get room(){
        return this._room;
    }
    get username(){
        return this._username;
    }
    /*
    addChat(msg){

        let datum = new Date();
        db.collection('chats')
        .add({
            message: msg,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(datum)
        })
        .then(() => {
            console.log('poslata poruka u db');
        })
        .catch(err => {
            console.log(`error: ${err}`);
        })
    }
    */
    async addChat(msg){
        let docChat = {
            message: msg,
            username: this.username,
            room: this.room,
            created_at: new Date()
        };
        let response = await this.chats.add(docChat);
        return response;
    }
    /*
    getChats(){
        this.chats
        .where('room','==',this.room)
        .orderBy('created_at','desc')
        .get()
        .then(snapshot => {
            snapshot.forEach(elem => {
                let data = elem.data()
                console.log(data.message,data.created_at,data.room);
            })
        })
        .catch((err) => {
            console.log('desila se greska', err);
        })
    }
    */
    getChats(callback){
        this.chats
        .where('room','==',this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    callback(change.doc.data());
                }
            })
        })
    }
}

let classtest1 = new Chatroom('js','user2')
//console.log(classtest1.room,classtest1.username);
let classtest2 = new Chatroom('general','user3')
//console.log(classtest1);
//console.log(classtest2);
/*
classtest1.addChat('Zdravo svima')
    .then(() => { 
        console.log('uspesno dodata poruka u db');
    })
    .catch((err) => {
        console.log('greska:',err);
    });
*/
//classtest2.addChat('ovo je general soba')
//.then(() => { 
//    console.log('uspesno dodata poruka u db');
//})
//.catch((err) => {
//    console.log('greska:',err);
//});

//classtest2.getChats()
classtest1.getChats(data => {
    console.log(data);
});
