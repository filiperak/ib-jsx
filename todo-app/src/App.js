import './App.css';
import ListContainer from './components/ListContainer';
import TaskCotnextProvider from './context/TaskContext';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <TaskCotnextProvider>
        <ListContainer/>
        <TaskList/>
      </TaskCotnextProvider>

    </div>
  );
}

export default App;
