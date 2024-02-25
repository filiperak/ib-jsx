import { useState,useContext } from "react";
import FormAddTask from "./FormAddTask";
import { AddContext } from "../context/AddContext";
import { TaskContext } from "../context/TaskContext";


const ListContainer = () => {

    const {isClicked, toggleClicked} = useContext(AddContext);
    const {tasks} = useContext(TaskContext);

    return(
        <section className="list-container">
            <header>
            <span className="pending-todos">Pending todos: {tasks.length}</span>
                <div className="add-task">
                    <p>Add task</p>
                    <button onClick={toggleClicked}>+</button>
                </div>
                {isClicked ? (<FormAddTask/>): null}
            </header>
        </section>
    )
}
export default ListContainer;