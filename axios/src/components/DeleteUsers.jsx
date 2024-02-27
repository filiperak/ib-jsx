import { useState } from "react";
import api from "../settings/api";

const DeleteUsers = () => {
    const [id,setId] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        const response = api.delete(`/users/${id}`).then(res => {
            return res;
        })

    }
    return(
        <>
        <h4>delete users:</h4>
        <form onSubmit={handleSubmit}>
            <label>user id : 
                <input type="text"onChange={e => setId(e.target.value)} />
            </label>
            <input type="submit" value="submit" />
        </form>
        </>
    )
}
export default DeleteUsers