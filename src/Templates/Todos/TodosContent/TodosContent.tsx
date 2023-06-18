import React, { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";

import { TodoData, TodosContext } from "../../../Context/TodosContext";
import { TagInputField } from "../../../Molecules";
import { TodoItem } from "../TodoItem/TodoItem";

interface TodosContentProps {
  todosList: TodoData[];
  completedCount: number;
}

export function TodosContent({ completedCount, todosList }: TodosContentProps) {
  const { t } = useTranslation();
  const { deleteTodoTag, editTodo, removeTodo, toggleAllTodos, toggleTodoComplete } = useContext(TodosContext);

  const handleTodoDelete = useCallback((todoId: string) => {
    removeTodo(todoId);
  }, [removeTodo]);

  const handleToggle = useCallback((todoId: string) => {
    toggleTodoComplete(todoId);
  }, [toggleTodoComplete]);

  return (
    <section className="main">
      <TagInputField
        id="toggle-all"
        inputClasses="toggle-all"
        type="checkbox"
        label={t("MarkAllAsComplete")}
        checked={todosList.length > 0 && completedCount === todosList.length}
        onChange={(e) => toggleAllTodos(e.target.checked)}
      />
      <ul className="todo-list">
        {
          todosList.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleTodoDelete}
              onTagDelete={deleteTodoTag}
              onToggle={handleToggle}
              onSubmit={editTodo}
            />
          ))
        }
      </ul>
    </section>
  )
}