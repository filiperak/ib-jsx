import { useContext } from "react";
// import {TaskContext} from "../context/TaskContext";
import { TaskContext } from "../context/TaskContext";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
    const {tasks} = useContext(TaskContext);
    return tasks.length ? (
        <div>
            {tasks.map((task) => (
                <TaskListItem key={task.id} task={task}/>
            ))}
        </div>
    ):(<div>All tasks are compleated :)</div>)
}
export default TaskList;