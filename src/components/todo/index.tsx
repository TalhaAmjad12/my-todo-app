"use client";

import React, { useState, useEffect } from "react";
import TodoList from "./components/todo-list";
import TodoListForm from "./components/todo-form";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../lib/actions/todo/todoActios";

export default function Todo() {
  const [todoList, setTodos] = useState([]);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  console.log(data, loading, error, "redux implementation data");

  return (
    <div>
      <TodoList todoList={data} updateTodoList={setTodos} />
      <TodoListForm updateTodoList={setTodos} />
    </div>
  );
}
