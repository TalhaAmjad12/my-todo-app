"use client";

import React, { useState } from "react";
import {
  StyledTextField,
  StyledAddNewListItemButton,
  StyledBoxDiv,
} from "./styled";
import { I_TodoFormProps } from "./types";
import { handleAddNewListItem } from "./helper";

export default function TodoListForm({ updateTodoList }: I_TodoFormProps) {
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
          handleAddNewListItem(newListItem, updateTodoList, setNewListItem)
        }
      >
        Add
      </StyledAddNewListItemButton>
    </StyledBoxDiv>
  );
}
