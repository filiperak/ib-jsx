import {Chatroom} from './chats.js';
import { chatUI } from './ui.js';

let chatroom1 = new Chatroom('homeworks','filip01')
chatroom1.room = 'JS'
//chatroom1.addChat('poruka 123 test')

//chatroom1.getChats((data) => {
//    console.log(data.created_at.toDate());
//    console.log(data);
//    templateLI(data)
//})

//const templateLI = (dt) => {
//    let liElem = document.createElement('li');
//    liElem.innerHTML = `${dt.username}: ${dt.message} <br> ${formatDate(dt.created_at.toDate())}`
//    //messageUl.appendChild(liElem)
//    return liElem;
//}

//const formatDate = (date) => `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}. ${date.getHours()}:${date.getMinutes()}`

/*
let x = 88
console.log(String(x).padStart(3,'0'));
*/
const messageUl = document.querySelector('.msgUl')

let chatUI1 = new chatUI(messageUl)
chatroom1.getChats(data => {
    //chatUI1.list.appendChild(chatUI1.tamplateLI(data));
    chatUI1.tamplateLI(data)
})
