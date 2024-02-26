import './App.css';

import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"
import {Home, Users , About , UserItem} from "./components"
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
          </div>
          <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/users/:userId' element={<UserItem/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
