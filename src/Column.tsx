import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Task, useAppState } from "./AppStateContext";

type ColumnProps = {
  id: string;
  title: string;
  tasks: Array<Task>;
};

export const Column = ({ id, title, tasks }: ColumnProps) => {
  const { dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        dark
        toggleButtonText="+ Add another card"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, listId: id } })
        }
      />
    </ColumnContainer>
  );
};
