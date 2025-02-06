import { addNewListItem } from "../../../../lib/features/todo-list/TodoListSlice";

export function handleAddNewListItem(
  todoListState,
  listItem,
  dispatch,
  setNewListItem
) {
  if (listItem === "") return alert("Please enter a task");
  const newListItem = {
    id: todoListState.length + 1,
    title: listItem,
    completed: "in-progress",
  };

  dispatch(addNewListItem(newListItem));

  setNewListItem("");
  return alert("Task added to ToDo List Successfully");
}
