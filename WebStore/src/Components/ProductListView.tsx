import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { showModal, hideModal } from "../store/modalSlice";

import Modal from "./Modal/Modal";
import DropDown from "./UI/DropDown";
import ProductCard from "./ProductCard/ProductCard";
import { IProduct } from "../types";

interface Props {
  sort: keyof IProduct;
  setSort: (v: keyof IProduct) => void;
  addProduct: (
    e: React.MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) => void;
  deleteProduct: (id: number) => void;
}

function ProductListView({ sort, setSort, addProduct, deleteProduct }: Props) {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal.modal);
  const products = useAppSelector((state) => state.products.products);

  function closeModal() {
    dispatch(hideModal());
  }

  return (
    <>
      <button
        className="products_new_button"
        onClick={() => dispatch(showModal())}
      >
        Add new Product
      </button>
      <DropDown sort={sort} setSort={setSort} />
      {modal ? (
        <Modal modalAction={addProduct} closeModal={closeModal} />
      ) : null}
      <div className="products_wrapper">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </>
  );
}

export default ProductListView;
