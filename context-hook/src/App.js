import './App.css';
import BookList from './components/BookList';
import BookContextProvider from './context/BookContext';
import ThemeContextProvider from './context/ThemeContext';
import Navbar from './components/NavBar';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar/>
          <BookContextProvider>
            <BookList/>
          </BookContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
    </div>
  );
}

export default App;
