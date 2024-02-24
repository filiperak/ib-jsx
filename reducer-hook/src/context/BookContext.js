import {createContext, useState,useReducer} from 'react';
import { bookReducer } from '../reducer/bookReducer';

export const BookContext = createContext()

const defaultBooks = [
    {title:'ubiti pticu rugalicu', id:1, autor:'autor01'},
    {title:'nepodnosljiva lakoca', id:2, autor:'02autor'},
    {title:'ko je ukrao moj sir', id:3, autor:'treciautor'}
]

const BookContextProvider = ({children}) => {
    const [books,dispatch] = useReducer(bookReducer,defaultBooks)


    return <BookContext.Provider value={{books,dispatch}}>
        {children}
    </BookContext.Provider>
}
export default BookContextProvider;