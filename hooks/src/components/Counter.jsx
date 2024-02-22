import { useState, useEffect } from "react";

// const initialFunc = () => {
//     return 0;
// }

const Counter = () => {
    const [counter, setCounter] = useState(0);
    //const [counter, setCounter] = useState(initialFunc());

    useEffect(() => {
        console.log('render');
    })
    return(
        <>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
};
export default Counter;
