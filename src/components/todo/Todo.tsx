"use client";

import React, { useState } from "react";
import TodoList from "./components/todo-list/TodoList";
import TodoListForm from "./components/todo-form";
import { TodoListBox } from "./styled";

export default function Todo() {
  const [todoList, setTodos] = useState([]);

  return (
    <div>
      <TodoListBox>
        <TodoList todoList={todoList} updateTodoList={setTodos} />
      </TodoListBox>
      <TodoListForm updateTodoList={setTodos} />
    </div>
  );
}
