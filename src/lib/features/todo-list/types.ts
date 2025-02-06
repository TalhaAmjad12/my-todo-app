export type T_todoItem = {
  id: number;
  title: string;
  completed: string;
};

export interface I_initialState {
  todoListData: [T_todoItem];
}
