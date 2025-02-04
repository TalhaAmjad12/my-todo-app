"use client";

import React, { useState } from "react";
import { TextField, AddNewListItemButton, BoxDiv } from "./styled";
import { I_TodoFormProps } from "./types";
import { handleAddNewListItem } from "./helper";

export default function TodoListForm({ updateTodoList }: I_TodoFormProps) {
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
          handleAddNewListItem(newListItem, updateTodoList, setNewListItem)
        }
      >
        Add
      </AddNewListItemButton>
    </BoxDiv>
  );
}
