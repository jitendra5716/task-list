import { useState } from "react";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";

import './App.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  // const [todos, setTodos] = useState([]);

  // const createTodo = (text) => {
  //   setTodos([...todos, { id: todos.length + 1, text, completed: false}]);
  // };

  // const toggleTodo = (index)=>{
  //   const list = [...todos];
  //   list[index].completed = !list[index].completed;
  //   setTodos(list);
  // }

  return (
    <Provider store={store}>
    <div>
      <h1>To Do App</h1>

      <TodoForm  />
      <TodoList  />
    </div>
    </Provider>
  );
}

export default App;
