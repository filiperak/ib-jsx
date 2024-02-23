import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookList = () => {
    const { books } = useContext(BookContext);

    return(
        <div>
            <ul>
                {books.map(book => <li key={book.id}>{book.title}</li>)}
            </ul>
        </div>
    );
};
export default BookList;
