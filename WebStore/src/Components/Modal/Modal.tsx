import React, { useEffect, useState } from "react";
import "./Modal.css";
import ModalInput from "../UI/ModalInput";
import { IProduct } from "../../types";
import { useAppDispatch } from "../../hooks";
import { hideModal } from "../../store/reducers/modalSlice";

interface Props {
  modalAction: (
    e: React.MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) => void;
  product?: IProduct
}

function Modal({ modalAction, product }: Props) {
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [count, setCount] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const dispatch = useAppDispatch()
  
  useEffect( () => {
    if (product) {
      setName(product.name)
      setURL(product.url)
      setCount(product.stock)
      setWeight(product.weight)
      setHeight(product.height)
      setWidth(product.width)
    }
  }, [])

  function closeModal() {
    dispatch(hideModal());
  }

  return (
    <div className="modal_window" onClick={closeModal}>
      <form className="modal_box" onClick={(e) => e.stopPropagation()}>
        <ModalInput
          label="Name"
          type="text"
          value={name}
          setValue={setName}
          placeholder="Name"
        />
        <ModalInput
          label="Image"
          type="text"
          value={url}
          setValue={setURL}
          placeholder="Image url"
        />
        <ModalInput
          label="Count"
          type="number"
          value={count}
          setValue={setCount}
          placeholder="Count"
        />
        <ModalInput
          label="Weight (grams)"
          type="number"
          value={weight}
          setValue={setWeight}
          placeholder="Weight"
        />
        <ModalInput
          label="height"
          type="number"
          value={height}
          setValue={setHeight}
          placeholder="height"
        />
        <ModalInput
          label="width"
          type="number"
          value={width}
          setValue={setWidth}
          placeholder="width"
        />

        <div className="modal_button_wrap">
          <button
            className="modal_button modal_add"
            onClick={(e) => {
              modalAction(e, {
                name: name,
                url: url,
                stock: count,
                weight: weight,
                height: height,
                width: width,
                id: Date.now(),
              });
            }}
          >
            Confirm
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
