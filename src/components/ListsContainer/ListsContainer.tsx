import { IList } from "../../types";
import ActionButton from "../ActionButton/ActionButton";
import List from "../List/List";
import { listContainer } from "./ListsContainer.css";

type TListContainerProps = {
  boardId: string;
  lists: IList[];
};

const ListsContainer = ({ boardId, lists }: TListContainerProps) => {
  return (
    <div className={listContainer}>
      {lists.map((list) => (
        <List key={list.listId} list={list} boardId={boardId} />
      ))}
      <ActionButton boardId={boardId} listId={""} list />
    </div>
  );
};

export default ListsContainer;
