import React, { useContext, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import TodoStatus from "../Constants/TodoStatus";
import { TodosContext } from "../Context/TodosContext";
import { TodosContent, TodosFooter, TodosHeader } from "../Templates/Todos";

export default function Todos() {
  const [params] = useSearchParams();
  const { todos } = useContext(TodosContext);

  const todosList = Array.from(todos.values());

  const activeTodoCount = useMemo(() => todosList.reduce((acc, todo) => todo.completed ? acc : acc + 1, 0), [todosList]);
  const completedCount = todosList.length - activeTodoCount;

  const todosStatus = params.get('status') ? params.get('status') as TodoStatus : TodoStatus.ALL_TODOS;

  const filteredTodos = todosList.filter(todo => {
    if (todosStatus === TodoStatus.ALL_TODOS) return true;

    return todosStatus === TodoStatus.COMPLETED_TODOS ? todo.completed : !todo.completed;
  });

  return (
    <section className="todoapp">
      <TodosHeader />
      <TodosContent todosList={filteredTodos} completedCount={completedCount} />
      <TodosFooter completedCount={completedCount} count={activeTodoCount} nowShowing={todosStatus} />
    </section>
  );
}
