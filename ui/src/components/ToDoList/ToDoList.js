import "./ToDoList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { deleteTodo, toggleTodo } from "../../redux/actions/todoActions";
import { deleteTodo,toggleTodo } from "../../redux/action/todoAction";
import { todoAction, todoSelector } from "../../redux/reducer/todoReducer";

function ToDoList() {

  const dispatch = useDispatch();

  const todos = useSelector(todoSelector);
  

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={index}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(todoAction.toggleTodo(index))}}
          >Toggle</button>
          <button className="btn btn-danger" onClick={()=>{dispatch(todoAction.deleteTodo(index))}}>
            Delete
          </button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
