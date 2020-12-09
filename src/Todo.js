import React from "react";

export default function Todo({ todo, handleDelete, handleToggle }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "gray" : "black" }}>
        {todo.name}
      </span>
      <button onClick={() => handleToggle(todo.id)}>Toggle</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
}
