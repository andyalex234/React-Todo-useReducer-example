import React, { useReducer, useState } from "react";
import Todos from "./Todos";

const ACTION = {
  ADD_TODO: "add-to-do",
  TOGGLE_DONE: "toggle-done",
  DELETE_TODO: "delete-todo"
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, addTodo(action.payload.name)];
    case ACTION.TOGGLE_DONE:
      return toggleDone(action.payload.id, todos);
    case ACTION.DELETE_TODO:
      return deleteTodo(action.payload.id, todos);
    default:
      return todos;
  }
}

function toggleDone(id, todos) {
  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, complete: !todo.complete };
    }
    return todo;
  });
}

function deleteTodo(id, todos) {
  return todos.filter((todo) => todo.id !== id);
}

function addTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false
  };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } });
    setName("");
  }

  function handleToggle(id) {
    dispatch({ type: ACTION.TOGGLE_DONE, payload: { id: id } });
  }

  function handleDelete(id) {
    dispatch({ type: ACTION.DELETE_TODO, payload: { id: id } });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>

      <Todos
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </>
  );
}
