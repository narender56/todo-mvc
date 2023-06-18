import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import { TodoItem } from "./TodoItem";
import { TodoData } from "../../../Context/TodosContext";

const testId = "todo-item";

const mockTodo: TodoData = {
  id: testId,
  title: "Todo 1",
  tags: ["tag1", "tag2"],
  completed: false
};

describe("TodoItem", () => {
  const onDeleteSpy = jest.fn();
  const onSubmitSpy = jest.fn();
  const onToggleSpy = jest.fn();
  const onTagDeleteSpy = jest.fn();

  afterEach(cleanup);

  beforeEach(() => {
    render(
      <TodoItem todo={mockTodo} onDelete={onDeleteSpy} onSubmit={onSubmitSpy} onTagDelete={onTagDeleteSpy} onToggle={onToggleSpy}/>
    );
  });
  it("should render the component", () => {
    expect(screen).toMatchSnapshot();
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-toggle-input`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-remove`)).toBeInTheDocument();
  });

  it("should toggle the todo", () => {
    const toggleTodo = screen.getByTestId(`${testId}-toggle-input`);
    fireEvent.click(toggleTodo);
    expect(onToggleSpy).toHaveBeenCalled();
  });

  it("should remove the todo", () => {
    const todoCloseButton = screen.getByTestId(`${testId}-remove`);
    fireEvent.click(todoCloseButton);
    expect(onDeleteSpy).toHaveBeenCalled();
  });

  it("should remove the todo tag", () => {
    const todoTagCloseButton = screen.getByTestId(`${mockTodo.tags[0]}-close`);
    fireEvent.click(todoTagCloseButton);
    expect(onTagDeleteSpy).toHaveBeenCalled();
  });

  it("should enable editing input", () => {
    const labelElement = screen.getByTestId(`${testId}-toggle-input-label`);
    fireEvent.doubleClick(labelElement);
    expect(screen.getByTestId(`${testId}-edit-input`)).toBeInTheDocument();
  });

  it("should enable editing input and change todo title", () => {
    const labelElement = screen.getByTestId(`${testId}-toggle-input-label`);
    fireEvent.doubleClick(labelElement);
    const todoEditInput = screen.getByTestId(`${testId}-edit-input`);

    fireEvent.change(todoEditInput, { target: { value: "new todo" }});
    fireEvent.blur(todoEditInput, { target: { value: "new todo" }});
    expect(onSubmitSpy).toHaveBeenCalled();
  });

  describe("Edit input escape and enter mode", () => {
    it("should enable editing input and escape without any change", () => {
      const labelElement = screen.getByTestId(`${testId}-toggle-input-label`);
      fireEvent.doubleClick(labelElement);
      const todoEditInput = screen.getByTestId(`${testId}-edit-input`);
  
      fireEvent.keyDown(todoEditInput, { code: "Escape" });
      fireEvent.keyDown(todoEditInput, { code: "Enter" });
      expect(onSubmitSpy).toHaveBeenCalled();
    });
  });
});