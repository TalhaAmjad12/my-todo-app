export function handleAddNewListItem(listItem, updateTodoList, setNewListItem) {
  if (listItem === "") return alert("Please enter a task");

  updateTodoList((prevList) => {
    const newListItem = {
      id: prevList.length + 1,
      title: listItem,
      completed: "in-progress",
    };

    return [...prevList, newListItem];
  });

  setNewListItem("");
  return alert("Task added to ToDo List Successfully");
}
