import React, { useContext, useMemo } from "react";

import { TodosContext } from "../../Context/TodosContext";
import { useGetTodoStatus } from "../../Hooks/useGetTodoStatus";
import { TodosContent, TodosFooter, TodosHeader } from "../../Templates/Todos";
import { getFilteredTodos } from "./Todos.helper";

export default function Todos() {
  const { todos } = useContext(TodosContext);
  const todosStatus = useGetTodoStatus();

  const todosList = Array.from(todos.values());
  const filteredTodos = getFilteredTodos(todosList, todosStatus);

  const activeTodoCount = useMemo(() => todosList.reduce((acc, todo) => todo.completed ? acc : acc + 1, 0), [todosList]);
  const completedCount = todosList.length - activeTodoCount;

  return (
    <section className="todoapp">
      <TodosHeader />
      <TodosContent todosList={filteredTodos} completedCount={completedCount} />
      <TodosFooter completedCount={completedCount} count={activeTodoCount} nowShowing={todosStatus} />
    </section>
  );
}
