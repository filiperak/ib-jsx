import { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";
import { v4 as uuidv4 } from 'uuid';

const SongList = () => {
    const [songs,setSongs] = useState([]);

    const addSong = (title) => {
        setSongs((prevState) => [...prevState,{title,id:uuidv4}])
        localStorage.setItem('Songs',JSON.stringify(songs));
    }

    useEffect(() => {
        //setSongs(JSON.parse(localStorage.setItem('songs')))
    })

    useEffect(() => {
        setSongs([
            {id:1,title:'song 1'},
            {id:2,title:'song 2'},
            {id:3,title:'song 3'}
        ])
    },[])

    return(
            <>
            {
                songs.map((song, id) => (
                    <li key={id}>{song}</li>
                ))
            }
            </>
    )
}
export default SongList;