"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./components/todo-list";
import TodoListForm from "./components/todo-form";
import { StyledTodoListBox } from "./styled";
import { fetchData } from "../../lib/features/todo-list/actions";

export default function Todo() {
  const todoListState = useSelector(
    (state: { todo: { todoListData: [] } }) => state.todo.data
  );

  console.log(todoListState, "datadarbar");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <StyledTodoListBox>
        <TodoList todoList={todoListState} />
      </StyledTodoListBox>
      <TodoListForm />
    </div>
  );
}
