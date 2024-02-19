import { useState } from "react";

const Counter = () => {
    const [state, setState] = useState(0);

    const handleDecrement = () => {
        setState(state - 1);
    }
    return (
        <div>
            <h3>Welcom to Counter Component</h3>
            <button onClick={handleDecrement}>-</button>
            <span>{state}</span>
            <button onClick={() => setState(state + 1)}>+</button>
        </div>
    )
};

export default Counter;