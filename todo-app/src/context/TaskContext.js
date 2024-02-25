// import { createContext, useReducer } from "react";
// import { taskReducer } from "../reducer/taskReducer";

// export const TaskContext = createContext();

// const defaultTasks = [
//     {task:'this is the first task',id:1}
// ]
// const TaskContextProvider = ({children}) => {
//     const [tasks,dispatch] = useReducer(taskReducer,defaultTasks)

//     return <TaskContext.Provider value={{tasks,dispatch}}>
//         {children}
//     </TaskContext.Provider>
// }
// export default TaskContextProvider;

import { createContext, useReducer, useEffect } from "react";
import { taskReducer } from "../reducer/taskReducer";

export const TaskContext = createContext();

const defaultTasks = [
    { task: 'this is the first task', id: 1 }
];

const TaskContextProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, [], () => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : defaultTasks;
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;
