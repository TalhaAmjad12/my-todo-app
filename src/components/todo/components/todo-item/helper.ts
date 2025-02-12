export const onClickEditUpdateToggle = (setIsEditing, action) => {
  if (action === "edit") {
    return setIsEditing(true);
  } else return setIsEditing(false);
};

export const updateExistingListItem = (
  updateTodoList,
  currentItem,
  editText
) => {
  updateTodoList((prevList) =>
    prevList.map((item) =>
      item.id === currentItem.id ? { ...currentItem, title: editText } : item
    )
  );
};
