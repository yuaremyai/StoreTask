import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { deleteComment, getComments } from "../api";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setComments, deleteComm } from "../store/reducers/commentsSlice";
import { showModal } from "../store/reducers/modalSlice";
import { IComment, IProduct } from "../types";

import "./ProductView.css";
import ProductViewInfo from "./ViewPage/ProductViewInfo";
import ViewComments from "./ViewPage/ViewComments";
import Modal from "./Modal/Modal";

interface StateProp {
  data: IProduct;
}

interface Props {
  editProduct: (e: React.MouseEvent<HTMLButtonElement>, data: IProduct) => void;
}

function ProductView({ editProduct }: Props) {
  const { data }: StateProp = useLocation().state;

  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal.modal);

  function setResponse( comments: IComment[]) {
    dispatch(setComments(comments));
  }

  useEffect(() => {
    getComments(data.id, setResponse);
  }, []);


  function handleClick() {
    dispatch(showModal());
  }

  function delComm(id: number) {
    deleteComment(id)
    dispatch(deleteComm(id))
  }

  return (
    <>
      {modal ? <Modal modalAction={editProduct} product={data} /> : null}
      <ProductViewInfo data={data} handleClick={handleClick} />
      <ViewComments id={data.id} delComm={delComm}/>
    </>
  );
}

export default ProductView;
