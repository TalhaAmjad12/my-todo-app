"use client";

import React from "react";
import TodoItem from "../todo-item/TodoItem";
import { I_TodoListProps, T_ListItem } from "./types";
import { UnorderedList } from "./styled";

export default function TodoList({ todoList }: I_TodoListProps) {
  if (todoList.length === 0) return <h1>No data Found</h1>;

  return (
    <UnorderedList>
      {todoList.map((todo: T_ListItem) => {
        return <TodoItem key={todo.id} listItem={todo} />;
      })}
    </UnorderedList>
  );
}
