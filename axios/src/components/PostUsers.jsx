import axios from "axios";
import { useState } from "react";
import api from "../settings/api";

const PostUsers = () => {
    const [name,setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    api.get(`/users/`,
    {user:{name}})
    .then(res => {
        console.log(res.data);
    })
    return(
        <>
        <form onSubmit={handleSubmit}>
            Person name: <input type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             ></input>
             <input type="submit" value="Sub" />
        </form>
        </>
    )
}
export default PostUsers;
