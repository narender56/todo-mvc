import React, { createContext, ReactNode, useState } from "react";

import { Utils } from "../Utils";
import { Todo } from "../Utils/TodoClass";

export interface TodoData {
  id: string;
  title: string;
  completed: boolean;
  tags: string[];
}

interface TodosContextProps {
  todos: Map<string, TodoData>;
  addTodo: (title: string) => void;
  removeTodo: (todoId: string) => void;
  deleteTodoTag: (todoId: string, tagIndex: number) => void;
  editTodo: (todoId: string, editedText: string) => void;
  toggleTodoComplete: (todoId: string) => void;
  toggleAllTodos: (checked: boolean) => void;
  removeCompletedTodos: () => void;
}

const emptyFun = () => {};

export const TodosContext = createContext<TodosContextProps>({
  todos: new Map(),
  addTodo: emptyFun,
  removeTodo: emptyFun,
  editTodo: emptyFun,
  deleteTodoTag: emptyFun,
  toggleTodoComplete: emptyFun,
  toggleAllTodos: emptyFun,
  removeCompletedTodos: emptyFun,
});

interface TodosContextProviderProps {
  children: ReactNode
}

export default function TodosContextProvider({ children }: TodosContextProviderProps) {
  const [todos, setTodos] = useState<Map<string, TodoData>>(new Map());

  const updateTodos = (newTodos: Map<string, TodoData>) => {
    setTodos(new Map(newTodos));
  }

  const addTodo = (title: string) => {
    const todo = new Todo(title);
    todos.set(todo.id, todo)
    updateTodos(todos);
  };

  const removeTodo = (todoId: string) => {
    todos.delete(todoId);
    updateTodos(todos);
  };

  const editTodo = (todoId: string, editedText: string) => {
    if (!editedText) {
      todos.delete(todoId);
    } else {
      const todo = todos.get(todoId)!;
      const { text, tags } = Utils.extractTags(editedText);
      if (text) {
        todo.title = text;
        todo.tags = tags;
      } else {
        todos.delete(todoId); // Todo title is mandatory, delete otherwise
      }
    }

    updateTodos(todos);
  };

  const toggleTodoComplete = (todoId: string) => {
    const todo = todos.get(todoId)!;
    todo.completed = !todo?.completed;
    updateTodos(todos);
  };

  const deleteTodoTag = (todoId: string, tagIndex: number) => {
    const todo = todos.get(todoId)!
    todo.tags.splice(tagIndex, 1);
    updateTodos(todos);
  }

  const toggleAllTodos = (checked: boolean) => {
    todos.forEach(todo => {
      todo.completed = checked;
    });
    updateTodos(todos);
  };

  const removeCompletedTodos = () => {
    todos.forEach(todo => {
      if (todo.completed) {
        todos.delete(todo.id);
      }
    });
    updateTodos(todos);
  }

  const value = {
    todos,
    addTodo,
    removeTodo,
    editTodo,
    deleteTodoTag,
    toggleTodoComplete,
    toggleAllTodos,
    removeCompletedTodos,
  }

  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  );
}