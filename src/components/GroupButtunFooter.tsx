import { useMemo } from "react";
import { ACTION_ENUM, IState } from "../types/type";
import { UiButton } from "./styled/UiButton";
import { UiBoxRow } from "./styled/UiBoxRow";

export const GroupButtunFooter = ({
  state,
  handelFilter,
}: {
  state: IState[];
  handelFilter: (s: string) => void;
}) => {
  const ItemsLeft = useMemo(
    () => state.filter((item) => !item.completed).length,
    [state]
  );
  return (
    <UiBoxRow style={{ justifyContent: "center" }}>
      <span>{ItemsLeft} items left</span>
      <UiButton
        onClick={() => {
          handelFilter("all");
        }}
      >
        All
      </UiButton>
      <UiButton
        onClick={() => {
          handelFilter("active");
        }}
      >
        Active
      </UiButton>
      <UiButton
        onClick={() => {
          handelFilter("complited");
        }}
      >
        Completed
      </UiButton>
      <UiButton
        onClick={() => {
          handelFilter(ACTION_ENUM.CLEAR);
        }}
      >
        Clear completed
      </UiButton>
    </UiBoxRow>
  );
};
