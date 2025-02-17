"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledTextField,
  StyledAddNewListItemButton,
  StyledBoxDiv,
} from "./styled";
import { addNewFn } from "../../../../lib/features/todo-list/actions";

export default function TodoListForm() {
  const todoListState = useSelector(
    (state: { todo: { todoListData: [] } }) => state.todo.data
  );
  const dispatch = useDispatch();
  const [newListItem, setNewListItem] = useState("");

  const handleAddNewListItem = () => {
    if (!newListItem.trim()) return;

    const newTodo = {
      id: todoListState.length + 1,
      title: newListItem,
      completed: "In-progress",
    };

    dispatch(addNewFn(newTodo));
    setNewListItem("");
  };

  return (
    <StyledBoxDiv>
      <StyledTextField
        placeholder="Enter New List Item"
        value={newListItem}
        onChange={(e) => setNewListItem(e.target.value)}
      />
      <StyledAddNewListItemButton onClick={() => handleAddNewListItem()}>
        Add
      </StyledAddNewListItemButton>
    </StyledBoxDiv>
  );
}
