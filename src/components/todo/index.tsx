"use client";

import React, { useEffect } from "react";
import TodoList from "./components/todo-list";
import TodoListForm from "./components/todo-form";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../lib/reducers/todo/actions/todoActions";
import { TListItem } from "./types";

export default function Todo() {
  const dispatch = useDispatch();
  const { data: todoListData }: TListItem = useSelector(
    (state: any) => state.todo
  );

  useEffect(() => {
    dispatch(fetchTodos() as any);
  }, [dispatch]);

  return (
    <div>
      <TodoList todoList={todoListData} />
      <TodoListForm />
    </div>
  );
}
