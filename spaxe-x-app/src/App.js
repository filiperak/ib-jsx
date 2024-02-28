import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
// import NavBar from './components/Navbar';
// import Logo from "./components/Logo";
// import NavTabs from "./components/NavTabs"
// import HomeViews from './components/Views/HomeView'
// import LaunchesViews from './components/Views/LaunchesViews';
// import RocketViews from './components/Views/RocketViews';
// import ShipViews from './components/Views/ShipViews';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomeView/>}/>
          <Route path='/' element={<LaunchesView/>}/>
          <Route path='/' element={<RocketView/>}/>
          <Route path='/' element={<ShipView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
