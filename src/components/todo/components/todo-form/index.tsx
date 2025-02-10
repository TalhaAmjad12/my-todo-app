"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledTextField, StyledAddNewListItemButton, StyledBoxDiv } from "./styled";
import { handleAddNewListItem } from "./helper";

export default function TodoListForm() {
  const todoListState = useSelector(
    (state: { todo: { todoListData: [] } }) => state.todo.todoListData
  );
  const dispatch = useDispatch();
  const [newListItem, setNewListItem] = useState("");

  return (
    <StyledBoxDiv>
      <StyledTextField
        placeholder="Enter New List Item"
        value={newListItem}
        onChange={(e) => setNewListItem(e.target.value)}
      />
      <StyledAddNewListItemButton
        onClick={() =>
          handleAddNewListItem(
            todoListState,
            newListItem,
            dispatch,
            setNewListItem
          )
        }
      >
        Add
      </StyledAddNewListItemButton>
    </StyledBoxDiv>
  );
}
