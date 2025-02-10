"use client";

import React from "react";
import TodoItem from "../todo-item";
import { I_TodoListProps, T_ListItem } from "./types";
import { StyledUnorderedList } from "./styled";

export default function TodoList({ todoList }: I_TodoListProps) {
  if (todoList.length === 0) return <h1>No data Found</h1>;

  return (
    <StyledUnorderedList>
      {todoList.map((todo: T_ListItem) => {
        return <TodoItem key={todo.id} listItem={todo} />;
      })}
    </StyledUnorderedList>
  );
}
