"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledListItem,
  StyledTextField,
  StyledTaskText,
  StyledEditButton,
  StyledUpdateButton,
  StyledDeleteButton,
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
    <StyledListItem key={listItem.id}>
      {isEditing ? (
        <>
          <StyledTextField
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <StyledUpdateButton
            onClick={() => {
              updateExistingListItem(dispatch, listItem, editText);
              onClickEditUpdateToggle(setIsEditing, "update");
            }}
          >
            Update
          </StyledUpdateButton>
        </>
      ) : (
        <>
          <StyledTaskText completed={listItem.completed}>{listItem.title}</StyledTaskText>
          <StyledEditButton
            onClick={() => onClickEditUpdateToggle(setIsEditing, "edit")}
          >
            Edit
          </StyledEditButton>
          <StyledDeleteButton onClick={() => deleteListItem(listItem, dispatch)}>
            Delete
          </StyledDeleteButton>
        </>
      )}
    </StyledListItem>
  );
}
