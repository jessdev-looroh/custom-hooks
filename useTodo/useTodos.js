import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    console.log("Change todo");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    console.log("OnNewTodo (TodoApp):");
    const action = {
      type: "[ADD]",
      payload: todo,
    };
    console.log("DISPATCH");

    dispatch(action);
    console.log("END DISPATCH");
  };

  const onCompleteTodo = ({ target: { id: todoId } }) => {
    console.log({ todoId });
    const action = {
      type: "[COMPLETE]",
      payload: todoId,
    };
    dispatch(action);
  };

  const removeTodo = ({ target: { id: todoId } }) => {
    console.log("OnRemoveTodo (TodoApp):");

    const action = {
      type: "[REMOVE]",
      payload: todoId,
    };

    dispatch(action);
  };

  return {
    todos,
    todoCount: todos.length,
    todoPendingCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    onCompleteTodo,
    removeTodo,
  };
};
