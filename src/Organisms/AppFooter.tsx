import React from "react";
import { useTranslation } from "react-i18next";
import { Anchor, Typography } from "../Atoms";

export function AppFooter() {
  const { t } = useTranslation();

  return (
    <footer className="info">
      <Typography variant="p">{t("DoubleClickToEditTodo")}</Typography>
      <Typography variant="p">
        {t("CreatedBy")} <Anchor href="http://github.com/remojansen">Remo H. Jansen</Anchor>
      </Typography>
      <Typography variant="p">
        {t("PartOf")} <Anchor href="http://todomvc.com">{t("TodoMVC")}</Anchor>
      </Typography>
    </footer>
  )
}
