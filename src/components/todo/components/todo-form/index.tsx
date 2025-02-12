"use client";

import React, { useState } from "react";
import {
  StyledTextField,
  StyledAddNewListItemButton,
  StyledBoxDiv,
} from "./styled";
import { addNewListItem } from "../../../../lib/reducers/todo/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

export default function TodoListForm() {
  const [newListItem, setNewListItem] = useState("");
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state: any) => state.todo);

  const handleAddNewListItem = () => {
    if (!newListItem.trim()) return;

    const newTodo = {
      id: data.length + 1,
      title: newListItem,
      completed: "In-progress",
    };

    dispatch(addNewListItem(newTodo));
    setNewListItem("");
  };

  console.log(isLoading);

  return (
    <StyledBoxDiv>
      <StyledTextField
        placeholder="Enter New List Item"
        value={newListItem}
        onChange={(e) => setNewListItem(e.target.value)}
      />
      <StyledAddNewListItemButton onClick={handleAddNewListItem}>
        Add
      </StyledAddNewListItemButton>
    </StyledBoxDiv>
  );
}
