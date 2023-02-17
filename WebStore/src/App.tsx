import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { hideModal } from "./store/modalSlice";
import { useAppDispatch } from "./hooks";
import {
  addToList,
  deleteFromList,
  sortList,
  setFromDB,
} from "./store/productsSlice";

import { saveToDB, getProducts, deleteFromDB } from "./api";
import { IProduct } from "./types";
import ProductListView from "./Components/ProductListView";
import ProductView from "./Components/ProductView";

function App() {
  const dispatch = useAppDispatch();
  const [response, setResponse] = useState<IProduct[]>([]);
  const [sort, setSort] = useState<keyof IProduct>("name");

  function addProduct(
    e: React.MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    if (
      product.name &&
      product.url &&
      product.stock &&
      product.weight &&
      product.height &&
      product.width
    ) {
      dispatch(hideModal());
      saveToDB(product);
      dispatch(addToList(product));
      dispatch(sortList(sort));
    }
  }

  function deleteProduct(id: number) {
    dispatch(deleteFromList(id));
    deleteFromDB(id);
  }

  useEffect(() => {
    getProducts(setResponse);
  }, []);

  useEffect(() => {
    dispatch(setFromDB(response));
    dispatch(sortList(sort));
  }, [response]);

  useEffect(() => {
    dispatch(sortList(sort));
  }, [sort]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ProductListView
                sort={sort}
                setSort={setSort}
                addProduct={addProduct}
                deleteProduct={deleteProduct}
              />
            }
          />
          <Route path="/product/:id" element={<ProductView />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
