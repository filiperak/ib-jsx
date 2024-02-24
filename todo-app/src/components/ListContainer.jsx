import { useState } from "react";
import FormAddTask from "./FormAddTask";

const ListContainer = () => {
    const [addTask,setAddTask] = useState(false);
    const handleAddBtn = () => {
        setAddTask(!addTask)
    }

    return(
        <section className="list-container">
            <header>
                <div>
                    <p>Add task</p>
                    <button onClick={handleAddBtn}>+</button>
                </div>
                {addTask ? (<FormAddTask/>): null}
            </header>
        </section>
    )
}
export default ListContainer;