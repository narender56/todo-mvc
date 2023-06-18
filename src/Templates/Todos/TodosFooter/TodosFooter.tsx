import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import TodoStatus from "../../../Constants/TodoStatus";
import { Utils } from "../../../Utils";
import { Button, Typography } from "../../../Atoms";
import { TodosContext } from "../../../Context/TodosContext";

interface TodosFooterProps {
  count: number;
  completedCount: number;
  nowShowing: TodoStatus;
}

export function TodosFooter({ count, completedCount, nowShowing }: TodosFooterProps) {
  const { t } = useTranslation();
  const activeTodoWord = Utils.pluralize(count, "item");

  const { removeCompletedTodos } = useContext(TodosContext);

  return (
    <footer className="footer">
      <Typography variant="span" className="todo-count">
        <strong>{count}</strong> {activeTodoWord} left
      </Typography>
      <ul className="filters">
        <li>
          <Link to="/"className={classNames({ selected: nowShowing === TodoStatus.ALL_TODOS })}>
            {t("All")}
          </Link>
        </li>
        <li>
          <Link to={`?status=${TodoStatus.ACTIVE_TODOS}`} className={classNames({ selected: nowShowing === TodoStatus.ACTIVE_TODOS })}>
            {t("Active")}
          </Link>
        </li>
        <li>
          <Link to={`?status=${TodoStatus.COMPLETED_TODOS}`} className={classNames({ selected: nowShowing === TodoStatus.COMPLETED_TODOS })}>
            {t("Completed")}
          </Link>
        </li>
      </ul>
      {
        completedCount > 0 && (
          <Button className="clear-completed" onClick={removeCompletedTodos}>{t("ClearCompleted")}</Button>
        )
      }
    </footer>
  );
}