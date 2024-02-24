import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";


const BookList = () => {
    const { books } = useContext(BookContext);
    const {isLigthTheme,ligth,dark} = useContext(ThemeContext);

    const theme = isLigthTheme? ligth:dark;
    const { isAuth} = useContext(AuthContext);
    return(
        <div style={{color: theme.syntax,background: theme.bg}} className="book-list-wrapper">
            {!isAuth? <ul>
                {books.map(book => <li key={book.id} style={{background:theme.ui}}>{book.title}</li>)}
            </ul> : <div>LogIn to see list</div>}
            {/* <ul>
                {books.map(book => <li key={book.id} style={{background:theme.ui}}>{book.title}</li>)}
            </ul> */}
        </div>
    );
};
export default BookList;
