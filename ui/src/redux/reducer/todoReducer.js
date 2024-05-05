import { createSlice } from "@reduxjs/toolkit";
// import { ADD_TODO,TOGGLE_TODO,DELETE_TODO } from "../action/todoAction";

//Initial State

const initialState = {
    todos:[]
};

// Reducer
// export const todoReducer = (state=initialState,action)=>{
//     switch(action.type){
//         case ADD_TODO:
//             return{
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed:false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos:state.todos.map((todo,i)=>{
//                     if(i==action.index){
//                         todo.completed = !todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         case DELETE_TODO:
//             let updatedTodo = state.todos.filter((todo,i)=>(i != action.indexVal));
//             return{
//                 ...state,
//                 todos:updatedTodo
//             }
//         default:
//             return state
//     }
// }

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo :(state,action)=>{
            state.todos.push({
                text:action.payload,
                completed:false
            });
        },
        toggleTodo :(state,action)=>{
            state.todos.map((todo,i)=>{
                if(i==action.payload){
                    todo.completed = !todo.completed
                }
                return todo;
            })
        },
        deleteTodo: (state,action)=>{
            let updatedTodo = state.todos.filter((todo,i)=>(i != action.payload));
            state.todos = updatedTodo;
        }
    }
});

export const  todoReducer = todoSlice.reducer;

export const todoAction = todoSlice.actions;

export const todoSelector = (state)=>state.todoReducer.todos;