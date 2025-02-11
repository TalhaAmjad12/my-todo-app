"use client";

import React, { useState } from "react";
import TodoList from "./components/todo-list";
import TodoListForm from "./components/todo-form";
import { useDispatch, useSelector } from "react-redux";

export default function Todo() {
  const [todoList, setTodos] = useState([]);

  const { data, isloading, error } = useSelector((state: any) => state.todo);

  console.log(data, isloading, error, "redux implementation data");

  return (
    <div>
      <TodoList todoList={data} updateTodoList={setTodos} />
      <TodoListForm updateTodoList={setTodos} />
    </div>
  );
}
