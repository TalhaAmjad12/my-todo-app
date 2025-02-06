import {
  updateListItem,
  deleteItem,
} from "../../../../lib/features/todo-list/TodoListSlice";

export const onClickEditUpdateToggle = (setIsEditing, action) => {
  if (action === "edit") {
    return setIsEditing(true);
  } else return setIsEditing(false);
};

export const updateExistingListItem = (dispatch, currentItem, editText) => {
  const updatedListItem = {
    id: currentItem.id,
    title: editText,
    completed: currentItem.completed,
  };

  console.log(updatedListItem);

  dispatch(updateListItem(updatedListItem));
};

export const deleteListItem = (currentItem, dispatch) => {
  dispatch(deleteItem(currentItem.id));
};
