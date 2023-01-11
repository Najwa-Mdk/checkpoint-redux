// importation
import {ADD_TASK , DELETE_TASK , DONE_TASK , EDIT_TASK} from "../ActionsTypes/listTask";

// initState 
const initState = {
    ListTasks : [
        { id: Math.random(), text:"Task 1", isDone: false },
        { id: Math.random(), text:"Task 2", isDone: false },
    ],
};

// pure function
const ListReducer = (state=initState, {type, payload}) => {
    switch (type) {
        case ADD_TASK:
            return {
                ...state, ListTasks: [...state.ListTasks , payload]
            }
        case DELETE_TASK:
            return {
                ...state, ListTasks: state.ListTasks.filter((el) => el.id !==payload ), // payload => id
            };
            case DONE_TASK:
            return {
                ...state, ListTasks: state.ListTasks.map((el) => (el.id ===payload ? {...el , isDone : !el.isDone} : el))
                };
        case EDIT_TASK:
            return {
                ...state, ListTasks : state.ListTasks.map((el) => (el.id === payload.id ? {...el, text : payload.newTask} :el))
            }

        default:
return state;
    }
};
export default ListReducer;