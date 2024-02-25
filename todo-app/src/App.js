import './App.css';
import ListContainer from './components/ListContainer';
import TaskCotnextProvider from './context/TaskContext';
import TaskList from './components/TaskList';
import AddContextProvider from './context/AddContext';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className='container'>
      <AddContextProvider>
        <TaskCotnextProvider>
          <ListContainer/>
          <TaskList/>
          <Footer/>
        </TaskCotnextProvider>
      </AddContextProvider>
      </div>
    </div>
  );
}

export default App;
