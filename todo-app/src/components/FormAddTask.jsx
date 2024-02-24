import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

const FormAddTask = () => {
    const {dispatch} = useContext(TaskContext);
    const [task,setTask] = useState('');
    const handleChange = (e) => {
        setTask(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_TASK',task})
    }

    return(
        <form className="form-add-task" 
        onSubmit={handleSubmit}>
            <p>Add new task:</p>
            <input type="text" 
            name="tekst" 
            value={task}
            onChange={handleChange}/>
            <input type="submit" value="Add" />
        </form>
    );
};
export default FormAddTask;