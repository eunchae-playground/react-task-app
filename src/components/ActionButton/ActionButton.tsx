import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { listButton, taskButton } from "./ActionButton.css";
import DropDownForm from "./DropDownForm/DropDownForm";

type TActionButtonProps = {
  boardId: string;
  listId: string;
  list?: boolean;
};

const ActionButton = ({
  boardId,
  listId,
  list = false,
}: TActionButtonProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const buttonText = list ? "새로운 리스트 등록" : "새로운 일 등록";
  return isFormOpen ? (
    <div>
      <DropDownForm
        setIsFormOpen={setIsFormOpen}
        list={list}
        boardId={boardId}
        listId={listId}
      />
    </div>
  ) : (
    <div
      className={list ? listButton : taskButton}
      onClick={() => setIsFormOpen(true)}
    >
      <IoIosAdd />
      <p>{buttonText}</p>
    </div>
  );
};

export default ActionButton;
