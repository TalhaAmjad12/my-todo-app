import { Dispatch, SetStateAction } from "react";

export type T_ListActionButton = {
  variant: string; // "edit" | "delete" | "update"
};

export type T_TaskTextProps = {
  completed: string; // "completed" | "in-progress"
};

export type T_ListItem = {
  id: number;
  title: string;
  completed: string;
  isProcessing: boolean;
};

export interface I_TodoItemProps {
  listItem: T_ListItem;
  updateTodoList: Dispatch<SetStateAction<string>>;
}
