"use client";

import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./components/todo-list/TodoList";
import TodoListForm from "./components/todo-form";
import { TodoListBox } from "./styled";

export default function Todo() {
  const todoListState = useSelector(
    (state: { todo: { todoListData: [] } }) => state.todo.todoListData
  );

  return (
    <div>
      <TodoListBox>
        <TodoList todoList={todoListState} />
      </TodoListBox>
      <TodoListForm />
    </div>
  );
}
