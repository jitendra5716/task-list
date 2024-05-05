// action constaints

export const ADD_TODO = 'Add Todo';
export const TOGGLE_TODO = 'Toggle Todo';
export const DELETE_TODO = 'Delete Todo';


// action creators

export const addTodo = (text)=>({type:ADD_TODO,text});
export const toggleTodo = (index)=>({type:TOGGLE_TODO,index});
export const deleteTodo = (indexVal)=>({type:DELETE_TODO,indexVal});