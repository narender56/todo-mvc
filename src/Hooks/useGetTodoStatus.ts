import { useSearchParams } from "react-router-dom";
import TodoStatus from "../Constants/TodoStatus";

export function useGetTodoStatus() {
  const [params] = useSearchParams();

  return params.get('status') ? params.get('status') as TodoStatus : TodoStatus.ALL_TODOS;
};