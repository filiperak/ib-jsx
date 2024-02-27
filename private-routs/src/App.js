import './App.css';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Settings from './components/Settings';
import Profile from './components/Profile';
import LogIn from './components/LogIn';
import { useState } from 'react';
import PrivateRout from './components/PrivateRout';
import PageNotFound from './components/PageNotFound';

function App() {
  const [isLoggedin,setisLoggin] = useState(false)

  const handleLogIn = () => {
    setisLoggin(!isLoggedin);
  }
  return (
    <div className="App">
      <Router>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/settings'}>Settings</Link>
        <Link to={'/login'}>LogIN</Link>
        <Routes>
          <Route path='/about' element={<About/>}/>

          <Route path='/profile' element={
            <PrivateRout isLoggedin={isLoggedin}>
              <Profile/>
            </PrivateRout>
          }/>

          <Route path='/settings' element={
            <PrivateRout isLoggedin={isLoggedin}>
              <Settings/>
            </PrivateRout>
          }/>

          <Route path='/login' element={<LogIn onHandleLogIn={handleLogIn}/>}/>

          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
