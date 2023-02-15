import React, { useState } from "react";
import { useAppSelector } from "../hooks";
import "./Modal.css";
import ModalInput from "./ModalInput";

interface Props {
  addProduct: (e: React.MouseEvent<HTMLButtonElement>, name: string, url: string, count: string, weight:string) => void;
  closeModal: () => void
}

function Modal({ addProduct, closeModal }: Props) {
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [count, setCount] = useState("");
  const [weight, setWeight] = useState("");




  return (
    <div className="modal_window" onClick={closeModal}>
      <form className="modal_box" onClick={(e) => e.stopPropagation()}>
        <ModalInput label="Name" type="text" value={name} setValue={setName} placeholder="Name" />
        <ModalInput label="Image" type="text" value={url} setValue={setURL} placeholder="Image url" />
        <ModalInput label="Count" type="number" value={count} setValue={setCount} placeholder="Count" />
        <ModalInput label="Weight (grams)" type="number" value={weight} setValue={setWeight} placeholder="Weight" />
        <div className="modal_button_wrap">
          <button className="modal_button modal_add" onClick={e => {addProduct(e, name, url, count, weight)}}>
            Add
          </button>
          <button className="modal_button modal_cancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
