import React from "react";

interface Props {
  text: string;
  setText: (v: string) => void;
  handleClick: () => void;
}

function CommentsInput({ text, setText, handleClick }: Props) {
  return (
    <div>
      <textarea
        className="comments_input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comments_send" onClick={handleClick}>
        Send
      </button>
    </div>
  );
}

export default CommentsInput;
