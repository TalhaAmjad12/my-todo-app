"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, AddNewListItemButton, BoxDiv } from "./styled";
import { handleAddNewListItem } from "./helper";

export default function TodoListForm() {
  const todoListState = useSelector(
    (state: { todo: { todoListData: [] } }) => state.todo.todoListData
  );
  const dispatch = useDispatch();
  const [newListItem, setNewListItem] = useState("");

  return (
    <BoxDiv>
      <TextField
        placeholder="Enter New List Item"
        value={newListItem}
        onChange={(e) => setNewListItem(e.target.value)}
      />
      <AddNewListItemButton
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
      </AddNewListItemButton>
    </BoxDiv>
  );
}
