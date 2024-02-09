import {Chatroom} from './chats.js';
import { chatUI } from './ui.js';
//DOM
const messageUl = document.querySelector('.msgUl')

//OBJEKTI
let chatroom1 = new Chatroom('homeworks','filip01')
let chatUI1 = new chatUI(messageUl);

//PRIKAZ PORUKA NA STRANICI
chatroom1.getChats(data => {
    //chatUI1.list.appendChild(chatUI1.tamplateLI(data));
    chatUI1.tamplateLI(data)
})
