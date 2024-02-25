import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
    const {tasks} = useContext(TaskContext);
    return tasks.length ? (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskListItem key={task.id} task={task}/>
            ))}
        </div>
    ):(<div className="no-tasks">All tasks are compleated :)</div>)
}
export default TaskList;