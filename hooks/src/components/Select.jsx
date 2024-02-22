import { useState } from "react";
import { useEffect } from "react";

const Select = () => {
    const [state,setState] = useState('posts');
    const[items,setItems] = useState([]);

    const handleChange = (e) => {
        setState(e.target.value)
    }
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
        .then(response => response.json())
        .then(json => setItems(json.slice(0,3)))
    },[state])
   


    return(
        <div>
            <select value={state} onChange={handleChange}>
                <option value="posts">posts</option>
                <option value="comments">comments</option>
                <option value="albums">albums</option>
            </select>
            <ul>
                {items.map((item) => {
                    return <li key={item.id}>{JSON.stringify(item)}</li>
                })}
            </ul>
        </div>
    )
}
export default Select;