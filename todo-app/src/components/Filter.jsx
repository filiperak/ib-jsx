import { useState, useContext } from "react";
import TaskListItem from "./TaskListItem";
import { TaskContext } from "../context/TaskContext";

const Filter = () => {
    const [value,setValue] = useState('DONE')
    const {dispatch,tasks} = useContext(TaskContext);

    const handleChange = (e) => {
        setValue(e.target.value)
        dispatch({type:e.target.value})
    }
    return(
        <>
            <h2>Filter tasks</h2>
            <select value={value} onChange={handleChange}>
                <option value="ALL">All</option>
                <option value="DONE">Done</option>
                <option value="PENDING">Pending</option>
            </select>
        </>
    )
};
export default Filter;