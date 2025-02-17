export type T_todoItem = {
  id: number;
  title: string;
  completed: string;
};

export interface I_initialState {
  data: [T_todoItem];
  isLoading: boolean;
  error: {};
}
