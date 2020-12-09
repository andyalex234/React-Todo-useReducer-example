import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, handleToggle, handleDelete }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
}
