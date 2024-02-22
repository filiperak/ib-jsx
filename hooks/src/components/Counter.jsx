import { useState, useEffect } from "react";

// const initialFunc = () => {
//     return 0;
// }

const Counter = () => {
    const [counter, setCounter] = useState(0);
    //const [counter, setCounter] = useState(initialFunc());

    // useEffect(() => {           //RENDERUJE SE PRI SVAKOJ PROMENI
    //     console.log('render');
    // });

    useEffect(() => {       //SAMO JEDNOM KADA SE KOMPONENTA UPISALA U DOM
        console.log('commponent did mount');
    },[0]);
    useEffect(() => {
        console.log('component did update');
    },[counter])
    //KADAA SE KOMPONENTA IZBRISE IZ DOMA
    useEffect(() => {
        return () => {
            console.log('component did unmounnt');
        }
    },[])
    return(
        <>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
};
export default Counter;
