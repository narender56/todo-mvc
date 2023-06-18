import React, { MouseEvent } from "react";
import classNames from "classnames";

import { Button, Typography } from "../../Atoms";

import styles from "./Chip.module.css";

interface ChipProps {
  label: string;
  onDelete?: (e: MouseEvent<HTMLElement>) => void;
  completed: boolean;
}

export function Chip({ label, onDelete, completed }: ChipProps) {
  return (
    <div data-testid={label} className={classNames(styles["chip"], completed ? styles['completed'] : "")}>
      <Typography variant="span" className={styles["chip-label"]}>{label}</Typography>
      {onDelete && (
        <Button data-testid={`${label}-close`} className={styles["chip-delete"]} onClick={onDelete}>
          &times;
        </Button>
      )}
    </div>
  )
}
