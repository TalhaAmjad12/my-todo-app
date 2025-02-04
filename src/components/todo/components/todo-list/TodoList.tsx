"use client";

import React from "react";
import TodoItem from "../todo-item/TodoItem";
import { I_TodoListProps } from "./types";
import { UnorderedList } from "./styled";

export default function TodoList({
  todoList,
  updateTodoList,
}: I_TodoListProps) {
  if (todoList.length === 0) return <h1>No data Found</h1>;

  return (
    <UnorderedList>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            listItem={todo}
            updateTodoList={updateTodoList}
          />
        );
      })}
    </UnorderedList>
  );
}
