import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskListItem = ({task}) => {
    const {dispatch} = useContext(TaskContext);
    return(
        <>
            <li>
                <div>{task.task}</div>   
                <span onClick={() => dispatch({type:'DELETE_TASK',id:task.id})}>X</span>
            </li>        
        </>
    );
};
export default TaskListItem;