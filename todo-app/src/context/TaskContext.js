import { createContext, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";

export const TaskContext = createContext();

const defaultTasks = [
    {task:'this is the first task',id:1}
]
const TaskContextProvider = ({children}) => {
    const [tasks,dispatch] = useReducer(taskReducer,defaultTasks)

    return <TaskContext.Provider value={{tasks,dispatch}}>
        {children}
    </TaskContext.Provider>
}
export default TaskContextProvider;