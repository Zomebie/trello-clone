import React, { createContext, useReducer, useContext } from "react";
import { nanoid } from "nanoid";
import { moveItem } from "./moveItem";
import { DragItem } from "./DragItem";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
  draggedItem: undefined,
};

export type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | undefined;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

type AppStateContextProps = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// retrieve the value from AppStateContext using useContext hook and return the result.
export const useAppState = () => {
  return useContext(AppStateContext);
};

//  discriminated union : type property is the discriminant.
type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; listId: string };
    }
  | {
      type: "MOVE_LIST";
      payload: {
        dragIndex: number;
        hoverIndex: number;
      };
    }
  | {
      type: "SET_DRAGGED_ITEM";
      payload: DragItem | undefined;
    };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      const lists = state.lists.concat({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });

      return {
        ...state,
        lists,
      };
    }

    case "ADD_TASK": {
      const { text, listId } = action.payload;

      const lists = state.lists.filter((list) =>
        list.id === listId ? list.tasks.push({ id: nanoid(), text }) : list
      );

      return {
        ...state,
        lists,
      };
    }

    case "MOVE_LIST": {
      const { dragIndex, hoverIndex } = action.payload;

      const lists = moveItem(state.lists, dragIndex, hoverIndex);

      return { ...state, lists };
    }

    case "SET_DRAGGED_ITEM": {
      return { ...state, draggedItem: action.payload };
    }

    default: {
      return state;
    }
  }
};
