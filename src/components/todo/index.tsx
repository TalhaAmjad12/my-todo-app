"use client";

import React, { useState, useEffect } from "react";
import TodoList from "./components/todo-list";
import TodoListForm from "./components/todo-form";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../lib/reducers/todo/actions/todoActios";

export default function Todo() {
  const [todoList, setTodos] = useState([]);

  const dispatch = useDispatch();
  const { data, error } = useSelector((state: any) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos() as any);
  }, [dispatch]);

  console.log(data, error, "redux implementation data");

  return (
    <div>
      <TodoList todoList={data} updateTodoList={setTodos} />
      <TodoListForm />
    </div>
  );
}
