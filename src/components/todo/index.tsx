"use client";

import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./components/todo-list";
import TodoListForm from "./components/todo-form";
import { StyledTodoListBox } from "./styled";

export default function Todo() {
  const todoListState = useSelector(
    (state: { todo: { todoListData: [] } }) => state.todo.todoListData
  );

  return (
    <div>
      <StyledTodoListBox>
        <TodoList todoList={todoListState} />
      </StyledTodoListBox>
      <TodoListForm />
    </div>
  );
}
