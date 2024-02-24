import { v4 as uuidv4 } from "uuid";

export const taskReducer = (state,action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    task:action.task,
                    id:uuidv4()
                }
            ];
        case 'DELETE_TASK':
            return state.filter((task) => task.id !== action.id)
        default:
            return state;
    }
}