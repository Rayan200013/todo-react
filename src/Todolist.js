//iza ma hatyt on submot (btaaml submit)
//we can do several events
//we can call them e
import { useState } from "react";
import Todo from "./Todo";

const ToDoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodos = (todoText) => {
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //function here
    if (!todo) return;
    addTodos(todo);
    //empty the todo after we save it (save it and then empty it woth empty string)
    setTodo("");
  };

  const removeTodo = () => {};

  const completeTodo = () => {};


  return (
    <>
      <h1>ToDoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo, index) => {
        return (
          <Todo
            //these are props
            todo={todo}
            index={index}
            key={index}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        );
      })}
    </>
  );
};

export default ToDoList;
