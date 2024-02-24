import { useReducer } from "react";
const initialState = 0;

const reducer = (state,action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        
        case 'decrement':
            return state - 1;
        case 'restart':
            return 0;
            
        default:
            break;
    }
}
const CounterReducer = () => {
    const [count,dispatch] = useReducer(reducer,initialState);
    return(
        <>
        {count}
        <button onClick={() => dispatch('increment')}>increment</button>
        <button onClick={() => dispatch('restart')}>reset</button>
        <button onClick={() => dispatch('decrement')}>decrement</button>
        </>
    )
}
export default CounterReducer;