import React, { KeyboardEvent, useContext } from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "../../../Atoms";
import { KeyboardKeys } from "../../../Constants/KeyboardKeys";
import { TodosContext } from "../../../Context/TodosContext";
import { TagInputField } from "../../../Molecules";

export function TodosHeader() {
  const { t } = useTranslation();

  const { addTodo } = useContext(TodosContext);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === KeyboardKeys.ENTER && e.currentTarget.value) {
      addTodo(e.currentTarget.value);
      e.currentTarget.value = ""
    }
  };

  return (
    <header className="header">
      <Typography variant="h1">{t("Todos")}</Typography>
      <TagInputField
        inputClasses="new-todo"
        placeholder={t("WhatNeedsToBeDone")}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </header>
  );
}
