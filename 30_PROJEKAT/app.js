import {Chatroom} from './chats.js';
import { chatUI } from './ui.js';
//DOM
const messageUl = document.querySelector('.msgUl');
const messageInp = document.querySelector('#msg');
const formMsg = document.querySelector('#inputMsg');
const formUpdate = document.querySelector('#inputUpdate');
const usernameInp = document.querySelector('#username');
const chatroomOptions = document.querySelectorAll('.chatroom');
//PROVERA I SET USERNAME U LOCALSTORAGE
const getUserData = () => {
    if(localStorage.getItem('user') == null){
        return localStorage.setItem('user','anonymus')
    }else{
        return localStorage.getItem('user')
    }
}
let usernameStorage = getUserData();

//OBJEKTI
let chatroom1 = new Chatroom('general',usernameStorage)
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

formUpdate.addEventListener('submit',(e) => {
    e.preventDefault();
    let usernameVal = usernameInp.value
    chatroom1.username = usernameVal;
    localStorage.setItem('user',usernameVal)
    formUpdate.reset();
});

messageInp.addEventListener('keypress',(e) => {
    if(e.which === 13){
        let msgVal = messageInp.value;
        if(msgVal.trim() != 0){
            chatroom1.addChat(msgVal);
        } 
        formMsg.reset();
    }
   
})

chatroomOptions.forEach(elem => {
    elem.addEventListener('click',(e) => {
        chatUI1.delete();
        let target = e.target.id
        chatroom1.room = target;
        chatroom1.getChats(data => {
            chatUI1.tamplateLI(data)
        });
    })
})
