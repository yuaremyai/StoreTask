import React from "react";
import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { hideModal } from "../store/modalSlice";

function Modal() {
  const modal = useSelector<RootState>((state) => state.modal.modal);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(hideModal())
  }

  if (!modal) {
    return <div />;
  }

  return (
    <div className="modal_window" onClick={() => dispatch(hideModal())}>
      <form className="modal_box" onClick={(e) => e.stopPropagation()}>
        <label>
          <p>Name</p>
          <input className="modal_input" type="text" placeholder="Name" />
        </label>
        <label>
          <p>Image</p>
          <input className="modal_input" type="text" placeholder="Image url" />
        </label>
        <label>
          <p>Count</p>
          <input className="modal_input" type="number" placeholder="Count" />
        </label>
        <label>
          <p>Weight (grams)</p>
          <input className="modal_input" type="number" placeholder="Weight" />
        </label>
        <div className="modal_button_wrap">
            <button className="modal_button modal_add"  onClick={e => e.preventDefault()}>Add</button>
            <button className="modal_button modal_cancel" onClick={closeModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
