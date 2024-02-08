import {Chatroom} from './chats.js'

let chatroom1 = new Chatroom('homeworks','filip01')
chatroom1.room = 'JS'
chatroom1.addChat('ovo je test modula')
chatroom1.getChats(data => {
    console.log(data);
})