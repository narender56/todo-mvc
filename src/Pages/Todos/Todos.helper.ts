import TodoStatus from "../../Constants/TodoStatus";
import { TodoData } from "../../Context/TodosContext";

export function getFilteredTodos(todos: TodoData[], todosStatus: TodoStatus): TodoData[] {
  return todos.filter(todo => {
    if (todosStatus === TodoStatus.ALL_TODOS) return true;

    return todosStatus === TodoStatus.COMPLETED_TODOS ? todo.completed : !todo.completed;
  })
}
