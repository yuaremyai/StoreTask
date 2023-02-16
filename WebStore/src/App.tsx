import React from "react";
import "./App.css";

import Modal from "./Components/Modal";
import { showModal, hideModal } from "./store/modalSlice";
import ProductCard from "./Components/ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addToList, deleteFromList } from "./store/productsSlice";

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const modal = useAppSelector((state) => state.modal.modal);

  function closeModal() {
    dispatch(hideModal());
  }

  function addProduct(
    e: React.MouseEvent<HTMLButtonElement>,
    name: string,
    url: string,
    stock: string,
    weight: string,
    id: number
  ) {
    e.preventDefault();
    if (name && url && stock && weight) {
      closeModal();
      dispatch(
        addToList({
          name: name,
          url: url,
          stock: stock,
          weight: weight,
          id: id,
        })
      );
    }
  }

  function deleteProduct(id: number){
    dispatch(deleteFromList(id))
  }

  return (
    <div className="App">
      <button onClick={() => dispatch(showModal())}>Add Product</button>
      {modal ? <Modal addProduct={addProduct} closeModal={closeModal} /> : null}
      <div className="products_wrapper">
        {products.map((value) => (
          <ProductCard
            stock={value.stock}
            name={value.name}
            image={value.url}
            weight={value.weight}
            id={value.id}
            key={value.id}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
