import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

const initialState: TBoardsState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫 번째 게시물",
      lists: [
        {
          listId: "list-0",
          listName: "list 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "task 1",
              taskDescription: "description",
              taskOwner: "john",
            },
            {
              taskId: "task-0",
              taskName: "task 1",
              taskDescription: "description",
              taskOwner: "john",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "list 2",
          tasks: [
            {
              taskId: "task-2",
              taskName: "task 3",
              taskDescription: "description",
              taskOwner: "john",
            },
          ],
        },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
});

export const boardsReducer = boardsSlice.reducer;
