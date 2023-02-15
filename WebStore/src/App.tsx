import React, { useState } from "react";
import "./App.css";

import Modal from "./Components/Modal";
import { showModal, hideModal } from "./store/modalSlice";
import ProductCard from "./Components/ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addToList } from "./store/productsSlice";

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  const modal = useAppSelector((state) => state.modal.modal);

  function closeModal() {
    dispatch(hideModal());
  }

  function addProduct(
    e: React.MouseEvent<HTMLButtonElement>,
    name: string,
    url: string,
    count: string,
    weight: string
  ) {
    e.preventDefault();
    if (name && url && count && weight) {
      closeModal();
      dispatch(
        addToList({ name: name, image: url, stock: count, weight: weight })
      );
    }
  }

  return (
    <div className="App">
      <button onClick={() => dispatch(showModal())}>Add Product</button>
      {modal ? <Modal addProduct={addProduct} closeModal={closeModal} /> : null}
      <div className="products_wrapper">
        {products.map((value, index) => (
          <ProductCard
            stock={value.stock}
            name={value.name}
            image={value.image}
            weight={value.weight}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
