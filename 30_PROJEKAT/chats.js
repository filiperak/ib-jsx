class Chatroom {
    constructor(room,username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub = false;
    }
    set room(room){
        this._room = room;
        if(this.unsub){
            this.unsub();
        }
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
   
    async addChat(msg){
        try{
            let docChat = {
                message: msg,
                username: this.username,
                room: this.room,
                created_at: new Date()
            };
            let response = await this.chats.add(docChat);
            return response;
        }
        catch{
            console.error('greska',err);
        }
    }

    getChats(callback){
        this.unsub = this.chats
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

export {Chatroom};
