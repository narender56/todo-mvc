import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import { TagInputField } from "./TagInputField";

describe("TagInputField", () => {
  const testId = "test-input";

  afterEach(cleanup);

  it("should render the component", () => {
    render(
      <TagInputField id={testId} placeholder="Sample Input"/>
    );

    expect(screen).toMatchSnapshot();
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it("should render the input with label and children", () => {
    render(
      <TagInputField id={testId} placeholder="Sample Input" label="Sample Label">Tags</TagInputField>
    );

    expect(screen.getByTestId(`${testId}-label`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-tags`)).toBeInTheDocument();
  });
});