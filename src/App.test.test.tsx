import { fireEvent, render } from "@testing-library/react";
import App from "./App";

test("Should clear the input field after adding a new todo item", () => {
  const { getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText(
    "Whats needs to be done?"
  ) as HTMLInputElement;

  fireEvent.change(input, { target: { value: "Test Todo" } });

  fireEvent.keyUp(input, { key: "Enter", code: "Enter" });

  expect(input.value).toBe("");
});
