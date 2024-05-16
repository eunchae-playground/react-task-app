import { ChangeEvent, useState } from "react";
import { FiX } from "react-icons/fi";
import { v4 } from "uuid";
import { useTypedDispatch } from "../../../hooks/redux";
import { addList, addTask } from "../../../store/slices/boardsSlice";
import { addLog } from "../../../store/slices/loggerSlice";
import {
  button,
  buttons,
  close,
  input,
  listForm,
  taskForm,
} from "./DropDownForm.css";

type TDropDownFormProps = {
  boardId: string;
  listId: string;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  list?: boolean;
};

const DropDownForm = ({
  boardId,
  listId,
  setIsFormOpen,
  list = false,
}: TDropDownFormProps) => {
  const dispatch = useTypedDispatch();

  const [text, setText] = useState("");
  const formPlaceholder = list
    ? "리스트의 제목을 입력하세요."
    : "일의 제목을 입력하세요.";
  const buttonTitle = list ? "리스트 추가하기" : "일 추가하기";

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const handleButtonClick = () => {
    if (!text) {
      return;
    }
    if (!list) {
      dispatch(
        addTask({
          boardId,
          listId,
          task: {
            taskId: v4(),
            taskName: text,
            taskDescription: "",
            taskOwner: "User",
          },
        })
      );
      dispatch(
        addLog({
          logId: v4(),
          logMessage: `일 생성하기 ${text}`,
          logAuthor: "User",
          logTimestamp: String(Date.now()),
        })
      );
      return;
    }

    dispatch(
      addList({ boardId, list: { listId: v4(), listName: text, tasks: [] } })
    );
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `리스트 생성하기 ${text}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
  };

  return (
    <div className={list ? listForm : taskForm}>
      <textarea
        className={input}
        autoFocus
        value={text}
        placeholder={formPlaceholder}
        onChange={handleTextChange}
        onBlur={() => setIsFormOpen(false)}
      />
      <div className={buttons}>
        <button className={button} onMouseDown={handleButtonClick}>
          {buttonTitle}
        </button>
        <FiX className={close} />
      </div>
    </div>
  );
};

export default DropDownForm;
