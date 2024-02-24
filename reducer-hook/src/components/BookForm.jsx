import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title,setTitle] = useState('');
    const [autor,setAutor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_BOOK',book:{title,autor}})
        setTitle('');
        setAutor('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="title"
            value={title}
            placeholder="title"
            onChange={e => setTitle(e.target.value)}/>

            <input type="text" 
            name="autor"
            value={autor}
            placeholder="autor"
            onChange={e => setAutor(e.target.value)}/>

            <input type="submit" value="ADD BOOK" />
        </form>
    )
}
export default BookForm;