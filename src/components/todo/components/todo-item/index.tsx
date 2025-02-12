"use client";

import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import {
  deleteListItem,
  updateListItemById,
} from "../../../../lib/reducers/todo/actions/todoActios";
import CustomLoader from "../../../common/loader/index";

export default function TodoItem({
  listItem,
  updateTodoList,
}: I_TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(listItem.title);
  const dispatch = useDispatch();

  const handleDeleteListItem = (id) => {
    dispatch(deleteListItem(id));
  };

  const handleUpdate = () => {
    const updatedItem = { ...listItem, title: editText || "" };

    console.log(updatedItem);

    dispatch(updateListItemById(updatedItem));
  };

  if (listItem.isProcessing)
    return (
      <StyledListItem key={listItem.id}>
        <CustomLoader />
      </StyledListItem>
    );

  console.log(listItem, "listItem");

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
              handleUpdate(listItem.id);
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
          <StyledDeleteButton onClick={() => handleDeleteListItem(listItem.id)}>
            Delete
          </StyledDeleteButton>
        </>
      )}
    </StyledListItem>
  );
}
