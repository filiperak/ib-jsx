import { useState, useEffect } from "react";


const NewSongForm = ({addSong}) => {
    const [title,setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title)
        setTitle('')
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <h3>Song name</h3>
            <input type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        </>
    );
};
export default NewSongForm;