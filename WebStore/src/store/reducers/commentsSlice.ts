import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../../types";

interface commentsState {
  comments: IComment[];
}

const initialState: commentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addCommentToList(state, action: PayloadAction<IComment>) {
      state.comments.push(action.payload);
    },

    setComments(state, action: PayloadAction<IComment[]>) {
      state.comments = [...action.payload]
    },

    deleteComm(state, action: PayloadAction<number>) {
      state.comments = state.comments.filter(
        (element) => element.commID !== action.payload
      );
    },
  },
});

export default commentsSlice.reducer;
export const { addCommentToList, setComments, deleteComm } = commentsSlice.actions;