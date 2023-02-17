import React from "react";
import { IComment } from "../../types";

interface Props {
  comm: IComment;
  delComm: (id: number) => void;
}

function CommentBody({ comm, delComm }: Props) {
  return (
    <div className="comment_body">
      <p className="comment_date">{comm.date}</p>
      <p className="comment_text">{comm.text}</p>
      <button onClick={() => delComm(comm.commID)}> Delete </button>
    </div>
  );
}

export default CommentBody;
