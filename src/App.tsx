import React, { useCallback, useMemo, useReducer, useState } from "react";
import { initialState, reducer } from "./reducer/reducerTodo";
import { GroupButtunFooter } from "./components/GroupButtunFooter";
import { ACTION_ENUM, IState } from "./types/type";
import { UiInput } from "./components/styled/UiInput";
import { UiH1 } from "./components/styled/UiH1";
import { UiTodo } from "./components/styled/UiTodo";
import { UiBoxColum } from "./components/styled/UiBoxColum";
import { UiLayout } from "./components/styled/UiLayout";
import { UiBoxRow } from "./components/styled/UiBoxRow";
import {
  CheckboxLabel,
  HiddenCheckbox,
  UiCheckbox,
} from "./components/styled/UiCheckBox";
import { UiTypography } from "./components/styled/UiTypograf";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [valueTodo, setValueTodo] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const handelChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValueTodo(e?.target?.value);
    },
    []
  );
  const handelAddTodo = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" && valueTodo.trim().length) {
        dispatch({ type: ACTION_ENUM.ADD, payload: valueTodo });
        setValueTodo("");
      }
    },
    [valueTodo]
  );
  const toggleTodo = useCallback((payload: number) => {
    console.log(payload);

    dispatch({ type: ACTION_ENUM.TOGGLE, payload });
  }, []);
  const handelFilter = useCallback((typeText: string) => {
    if (typeText === ACTION_ENUM.CLEAR) {
      return dispatch({ type: ACTION_ENUM.CLEAR });
    }
    setTypeFilter(typeText);
  }, []);
  const todoListArr: IState[] = useMemo(() => {
    switch (typeFilter) {
      case "active":
        return state.filter((item) => !item.completed);
      case "complited":
        return state.filter((item) => item.completed);
      case "all":
        return state;
      default:
        return state;
    }
  }, [state, typeFilter]);
  return (
    <UiLayout>
      <UiH1 data-text="todos">todos</UiH1>
      <UiInput
        onChange={handelChange}
        value={valueTodo}
        onKeyUp={handelAddTodo}
        placeholder="Whats needs to be done?"
      />
      <UiBoxColum>
        {todoListArr.map((item) => (
          <UiTodo key={item.id}>
            <UiBoxRow>
              <UiCheckbox>
                <HiddenCheckbox
                  type="checkbox"
                  id={`checkbox${item.id}`}
                  checked={item.completed}
                  onChange={() => toggleTodo(item.id)}
                />
                <CheckboxLabel htmlFor={`checkbox${item.id}`} />
              </UiCheckbox>
              <UiTypography completed={item.completed}>
                {item.body}
              </UiTypography>
            </UiBoxRow>
          </UiTodo>
        ))}
      </UiBoxColum>
      <GroupButtunFooter state={state} handelFilter={handelFilter} />
    </UiLayout>
  );
}

export default App;
