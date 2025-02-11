"use client";

import React from "react";
import TodoItem from "../todo-item";
import { I_TodoListProps } from "./types";
import { StyledUnorderedList } from "./styled";

export default function TodoList({
  todoList,
  updateTodoList,
}: I_TodoListProps) {
  if (todoList.length === 0)
    return (
      <StyledUnorderedList>
        <h1>No data Found</h1>
      </StyledUnorderedList>
    );

  return (
    <StyledUnorderedList>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            listItem={todo}
            updateTodoList={updateTodoList}
          />
        );
      })}
    </StyledUnorderedList>
  );
}
