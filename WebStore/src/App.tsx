import React, { useEffect, useState } from "react";
import "./App.css";

import Modal from "./Components/Modal/Modal";
import { showModal, hideModal } from "./store/modalSlice";
import ProductCard from "./Components/ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addToList, deleteFromList, sortList, setFromDB } from "./store/productsSlice";

import { saveToDB, getProducts, deleteFromDB } from "./api";
import { IProduct } from "./types";

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const modal = useAppSelector((state) => state.modal.modal);
  const [response, setResponse] = useState<IProduct[]>([])
  function closeModal() {
    dispatch(hideModal());
  }

  function addProduct(
    e: React.MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    if (product.name && product.url && product.stock && product.weight && product.height && product.width) {
      closeModal();
      saveToDB(product);
      dispatch(
        addToList(product)
      );
    }
  }

  function deleteProduct(id: number) {
    dispatch(deleteFromList(id));
    deleteFromDB(id)
  }

  useEffect(() => {
    getProducts(setResponse)
  }, []);
  
  useEffect(() => {
    dispatch(setFromDB(response))
  }, [response])

  return (
    <div className="App">
      <button onClick={() => dispatch(showModal())}>Add Product</button>
      <button onClick={() => dispatch(sortList())}>Sort</button>

      {modal ? <Modal addProduct={addProduct} closeModal={closeModal} /> : null}
      <div className="products_wrapper">
        {products.map((product) => (
          <ProductCard
            stock={product.stock}
            name={product.name}
            image={product.url}
            weight={product.weight}
            id={product.id}
            key={product.id}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
