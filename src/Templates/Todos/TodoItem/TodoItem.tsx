import React, { FormEvent, KeyboardEvent, useState, MouseEvent } from "react";
import classNames from "classnames";

import { TagInputField, Chip } from "../../../Molecules";
import { Button } from "../../../Atoms";
import { KeyboardKeys } from "../../../Constants/KeyboardKeys";
import { TodoData } from "../../../Context/TodosContext";
import { Utils } from "../../../Utils";

interface TodoItemProps {
  todo: TodoData;
  onDelete: (todoId: string) => void;
  onToggle: (todoId: string) => void;
  onSubmit: (todoId: string, value: string) => void;
  onTagDelete: (todoId: string, tagIndex: number) => void;
}

export function TodoItem({ todo, onSubmit, onDelete, onToggle, onTagDelete, }: TodoItemProps) {
  const [editText, setEditText] = useState(Utils.combineTagsWithText(todo.title, todo.tags));
  const [editing, setEditing] = useState(false);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setEditText(e.currentTarget.value);
  };

  const handleBlur = () => {
    onSubmit(todo.id, editText);
    setEditing(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(e.code);
    if (e.code === KeyboardKeys.ESCAPE) {
      setEditText(todo.title);
    } else if (e.code === KeyboardKeys.ENTER) {
      handleBlur();
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = (e: MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault();
    onTagDelete(todo.id, index);
    setEditText(Utils.combineTagsWithText(todo.title, todo.tags));
  }

  return (
    <li data-testid={todo.id} className={classNames({ completed: todo.completed, editing })}>
      <div className="view">
        <TagInputField
          id={`${todo.id}-toggle-input`}
          inputClasses="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle.bind(null, todo.id)}
          label={todo.title}
          onDoubleClick={handleEdit}
        >
          {
            todo.tags.map((tag, index) => <Chip key={`${todo.id}-${index}-${tag}`} completed={todo.completed} label={tag} onDelete={(e) => handleDelete(e, index)} />)
          }
        </TagInputField>
        <Button data-testid={`${todo.id}-remove`} className="destroy" onClick={() => onDelete(todo.id)} />
      </div>
      {
        editing && (
          <TagInputField
            id={`${todo.id}-edit-input`}
            inputClasses="edit"
            value={editText}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        )
      }
    </li>
  )
}
