"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ListItem,
  TextField,
  TaskText,
  EditButton,
  UpdateButton,
  DeleteButton,
} from "./styled";
import { I_TodoItemProps } from "./types";
import {
  deleteListItem,
  onClickEditUpdateToggle,
  updateExistingListItem,
} from "./helper";

export default function TodoItem({ listItem }: I_TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(listItem.title);
  const dispatch = useDispatch();

  return (
    <ListItem key={listItem.id}>
      {isEditing ? (
        <>
          <TextField
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <UpdateButton
            onClick={() => {
              updateExistingListItem(dispatch, listItem, editText);
              onClickEditUpdateToggle(setIsEditing, "update");
            }}
          >
            Update
          </UpdateButton>
        </>
      ) : (
        <>
          <TaskText completed={listItem.completed}>{listItem.title}</TaskText>
          <EditButton
            onClick={() => onClickEditUpdateToggle(setIsEditing, "edit")}
          >
            Edit
          </EditButton>
          <DeleteButton onClick={() => deleteListItem(listItem, dispatch)}>
            Delete
          </DeleteButton>
        </>
      )}
    </ListItem>
  );
}
