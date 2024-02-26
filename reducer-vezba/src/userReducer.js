
/*
action = {
    type:'string,
    payload:{}    
}*/

import { ADD_USER } from "./actions";
const korisnikReducer = (state,action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, {name: action.payload.name,id: Math.random()*100}]
           
        case 'DEL':
            return state.filter(user => user.id !== action.payload.id);
        default:
            return state;
    }
};
export default korisnikReducer;