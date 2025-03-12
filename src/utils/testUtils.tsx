import React from "react";
import { render } from "@testing-library/react";

export const renderWithProviders = (
  component: unknown,
  // eslint-disable-next-line no-empty-pattern
  {} = {}
) => {
  return render(<>{component}</>);
};
