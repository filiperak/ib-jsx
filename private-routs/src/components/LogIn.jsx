import { useState } from "react";

const LogIn = ({onHandleLogIn}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        onHandleLogIn();
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>log in</h1>
            <label>username</label>
            <input type="text"
            value={username} 
            onChange={e => setUsername(e.target.value)}/>

            <label>password</label>
            <input type="text"
            value={password} 
            onChange={e => setPassword(e.target.value)}/>

            <input type="submit" value="LogIn" />
        </form>
    )
}
export default LogIn;