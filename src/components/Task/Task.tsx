import { Draggable } from "@hello-pangea/dnd";
import { container, description, title } from "./Task.css";

type TTaskProps = {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
};

const Task = ({
  taskName,
  taskDescription,
  boardId,
  id,
  index,
}: TTaskProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={container}
        >
          <div className={title}>{taskName}</div>
          <div className={description}>{taskDescription}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
