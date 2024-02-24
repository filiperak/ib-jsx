import './App.css';
import BookList from './components/BookList';
import CounterReducer from './components/CounterReducer';
import BookContextProvider from './context/BookContext';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <CounterReducer/>
      <BookContextProvider>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
