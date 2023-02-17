import React, { useState } from "react";
import { sendComment } from "../../api";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addCommentToList } from "../../store/reducers/commentsSlice";
import CommentBody from "./CommentBody";
import CommentsInput from "./CommentsInput";

interface Props {
  id: number;
  delComm: (id: number) => void
}

function ViewComments({ id, delComm }: Props) {
  const [text, setText] = useState("");
  const comments = useAppSelector((state) => state.comments.comments);
  const dispatch = useAppDispatch();

  function handleClick() {
    let date = new Date().toJSON();
    date = `${date.slice(11, 16)} ${date.slice(0, 10)}`;
    const commID = Date.now();
    sendComment(id, {
      commID: commID,
      text: text,
      date: date,
    });
    dispatch(addCommentToList({ commID: commID, text: text, date: date }));
    setText("");
  }

  return (
    <div className="comments_wrapper">
      <CommentsInput text={text} setText={setText} handleClick={handleClick} />
      <div className="comments_section">
        {comments.map((comm, index) => (
          <CommentBody comm={comm} key={index} delComm={delComm} />
        ))}
      </div>
    </div>
  );
}

export default ViewComments;
