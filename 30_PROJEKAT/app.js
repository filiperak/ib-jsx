import {Chatroom} from './chats.js';
import { chatUI } from './ui.js';
//DOM
const messageUl = document.querySelector('.msgUl');
const messageInp = document.querySelector('#msg');
const formMsg = document.querySelector('#inputMsg');
//OBJEKTI
let chatroom1 = new Chatroom('homeworks','filip01')
let chatUI1 = new chatUI(messageUl);
//PRIKAZ PORUKA NA STRANICI
chatroom1.getChats(data => {
    chatUI1.tamplateLI(data)
});

formMsg.addEventListener('submit',(e) => {
    e.preventDefault();
    let msgVal = messageInp.value;
    if(msgVal.trim() != 0){
        chatroom1.addChat(msgVal);
    } 
    formMsg.reset();
});
