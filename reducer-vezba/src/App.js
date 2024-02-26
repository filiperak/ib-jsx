import './App.css';
import { useReducer,useState } from "react";
import korisnikReducer from './userReducer';
import { ADD_USER } from './actions';

const defaultUsers = [
  {
    name:'user1',
    id:0
  }
]

function App() {
  const [user,dispatchUser] = useReducer(korisnikReducer,defaultUsers)
  const [inputState,setInputState] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchUser({
      type:ADD_USER,
      payload: {
         name: inputState 
        } 
    })
    setInputState('')
  }
  const handleBtn = (id) => {
    dispatchUser({
      type: 'DEL',
      payload: { id }
    });
  }
  return (
    <div className="App">
      <div>
        {user.map(user => (
            <li key={user.id}>{user.name}<button onClick={handleBtn}>del</button></li>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputState} onChange={(e) => setInputState(e.target.value)}></input>
        <input type='submit' value='submit'></input>
      </form>
    </div>
  );
}

export default App;
