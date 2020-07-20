import React from "react";
import { useDragLayer } from "react-dnd";
import { CustomDragLayerContainer } from "./styles";
import { Column } from "./Column";

const CustomDragLayer: React.FC = () => {
  const { isDragging, item } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
  }));

  return isDragging ? (
    <CustomDragLayerContainer>
      <Column
        index={item.index}
        id={item.id}
        text={item.text}
        tasks={item.tasks}
      />
    </CustomDragLayerContainer>
  ) : null;
};
