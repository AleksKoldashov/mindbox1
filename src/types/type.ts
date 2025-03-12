export interface IState {
  id: number;
  body: string;
  completed: boolean;
}
export enum ACTION_ENUM {
  CLEAR = "CLEAR",
  TOGGLE = "TOGGLE",
  ADD = "ADD"
}
export type TAction =
  | { type: ACTION_ENUM.ADD, payload: string }
  | { type: ACTION_ENUM.TOGGLE,payload: number}
  | { type: ACTION_ENUM.CLEAR}

