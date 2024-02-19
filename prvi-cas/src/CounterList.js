import { useState } from "react";
import CounterListItem from "./CounterListItem";

const CounterList = () => {
    const [counters,setCounters] = useState([
        { id: 1, value: 0 },
        { id: 2, value: 5 },
        { id: 3, value: 9 },
    ]);

    return (
        <div>
            <h1>Counter list:</h1>
            <ul>
                {/*Array.map() - vraca transofmisane elemente*/}
                {/*Array.forEach() -ide kro niz bez da vraca bilo sta */}

                {/* {counters.map((elem, ind) => (
                    <li key={elem.id}>{elem.value}</li>
                ))} */}

                {
                    counters.map((elem,ind) => {
                        return (
                            <div key={elem.id}>
                                id:{elem.id}: <CounterListItem elem = {elem}/>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
};
export default CounterList;