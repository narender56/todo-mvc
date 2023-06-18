import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import { Chip } from "./Chip";

describe("Chip", () => {
  const label = "test-chip";
  const deleteSpy = jest.fn();

  afterEach(cleanup);

  it("should render the component", () => {
    render(
      <Chip label={label} onDelete={deleteSpy} completed/>
    );

    expect(screen).toMatchSnapshot();
    expect(screen.getByTestId(label)).toBeInTheDocument();
    expect(screen.getByTestId(`${label}-close`)).toBeInTheDocument();
  });

  it("should render the chip and click on delete button", () => {
    render(
      <Chip label={label} onDelete={deleteSpy} completed/>
    );
    const closeButton = screen.getByTestId(`${label}-close`);
    fireEvent.click(closeButton);
    expect(deleteSpy).toHaveBeenCalled();
  });
});