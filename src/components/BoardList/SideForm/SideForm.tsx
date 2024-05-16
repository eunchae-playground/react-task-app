import { ChangeEvent, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { useTypedDispatch } from "../../../hooks/redux";
import { addBoard } from "../../../store/slices/boardsSlice";
import { addLog } from "../../../store/slices/loggerSlice";
import { icon, input, sideForm } from "./SideForm.css";

type TSideFormProps = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SideForm = ({ setIsFormOpen }: TSideFormProps) => {
  const dispatch = useTypedDispatch();

  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleBlur = () => {
    setIsFormOpen(false);
  };
  const handleClickCheckIcon = () => {
    if (!inputText) {
      return;
    }

    dispatch(
      addBoard({
        board: { boardId: uuidv4(), boardName: inputText, lists: [] },
      })
    );

    dispatch(
      addLog({
        logId: uuidv4(),
        logMessage: `게시판 등록 ${inputText}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
  };

  return (
    <div className={sideForm}>
      <input
        className={input}
        autoFocus
        type="text"
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FiCheck className={icon} onMouseDown={handleClickCheckIcon} />
    </div>
  );
};

export default SideForm;
