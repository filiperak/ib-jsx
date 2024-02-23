import {createContext, useState} from 'react';

export const BookContext = createContext()

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        {title:'ubiti pticu rugalicu', id:1},
        {title:'nepodnosljiva lakoca', id:2},
        {title:'ko je ukrao moj sir', id:3}
    ])

    return <BookContext.Provider value={{books}}>
        {/* props.childern omogucava da bilo koja ugnjezdena komponenta u okviru bookcontextprovidera da moze da pristupi contextu koji je provajdovan od strane bookContext-a */}
        {props.children}
    </BookContext.Provider>
}
export default BookContextProvider;