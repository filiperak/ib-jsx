import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookListItem = ({book}) => {
    const {dispatch} = useContext(BookContext);
    return(
        <>
            <li onClick={() => dispatch({type: 'REMOVE_BOOK',id:book.id})}>
                <div className="title">{book.title}</div>
                <div className="autotr">{book.autor}</div>
                <span>x</span>
            </li>
        </>
    )
}
export default BookListItem;