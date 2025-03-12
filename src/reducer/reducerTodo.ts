import { ACTION_ENUM, IState, TAction } from "../types/type";

export const initialState = [
    { id: 1, body: 'Тестовое задание', completed: false },
    { id: 2, body: 'Прекрасный код', completed: true },
    { id: 3, body: 'Покрытие тестами', completed: false }
];

export const reducer = (state:IState[], action: TAction) => {
    switch (action.type) {
      case ACTION_ENUM.ADD:
        return [...state, { id: Math.random(), body: action.payload, completed: false}]; 
      case ACTION_ENUM.TOGGLE:
        return state.map(item =>
            item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        );
      case ACTION_ENUM.CLEAR:
        return state.filter(item=>!item.completed); 
      default:
        return state;
    }
  };