import './App.css';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import Logo from "./components/Logo";
import NavTabs from "./components/NavTabs"
import HomeViews from './components/Views/HomeView'
import LaunchesViews from './components/Views/LaunchesViews';
import RocketViews from './components/Views/RocketViews';
import ShipViews from './components/Views/ShipViews';


function App() {
  return (
    <div className="App">
      <Router>

        <Link to={'/'}>Home View</Link>
        <Link to={'/launchesviews'}>Launches views</Link>
        <Link to={'/rocketviews'}>Rocket views</Link>
        <Link to={'/shipviews'}>Ship views</Link>


        <Routes>
          <Route path='/' element={<HomeViews/>}/>
        </Routes>

        <Routes>
          <Route path='/launchesviews' element={<LaunchesViews/>}/>
        </Routes>

        <Routes>
          <Route path='/rocketviews' element={<RocketViews/>}/>
        </Routes>

        <Routes>
          <Route path='/shipviews' element={<ShipViews/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
