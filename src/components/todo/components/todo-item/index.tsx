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
import { onClickEditUpdateToggle } from "./helper";
import { updatefn } from "../../../../lib/features/todo-list/actions";

import { deletefn } from "../../../../lib/features/todo-list/actions";

export default function TodoItem({ listItem }: I_TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(listItem.title);
  const dispatch = useDispatch();

  const deleteListItem = () => {
    dispatch(deletefn(listItem.id));
  };

  const updateExistingListItem = () => {
    const updatedListItem = {
      id: listItem.id,
      title: editText,
      completed: listItem.completed,
    };

    dispatch(updatefn(updatedListItem));
  };

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
              updateExistingListItem();
              onClickEditUpdateToggle(setIsEditing, "update");
            }}
          >
            Update
          </StyledUpdateButton>
        </>
      ) : (
        <>
          <StyledTaskText completed={listItem.completed}>
            {listItem.title}
          </StyledTaskText>
          <StyledEditButton
            onClick={() => onClickEditUpdateToggle(setIsEditing, "edit")}
          >
            Edit
          </StyledEditButton>
          <StyledDeleteButton onClick={() => deleteListItem()}>
            Delete
          </StyledDeleteButton>
        </>
      )}
    </StyledListItem>
  );
}
