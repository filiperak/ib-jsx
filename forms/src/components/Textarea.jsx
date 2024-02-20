import { useState } from "react";

const Textarea = () => {
    const [desc, setDesc] = useState('Content of text area')
    return(
        <form >
            <textarea value={desc} onChange={e => setDesc(e.target.value)}/>
        </form>
    )
};

export default Textarea;