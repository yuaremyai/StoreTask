import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { hideModal } from "./store/reducers/modalSlice";
import { useAppDispatch } from "./hooks";
import {
  addToList,
  deleteFromList,
  sortList,
  setProducts,
  editListElement,
} from "./store/reducers/productsSlice";

import { saveToDB, getProducts, deleteFromDB } from "./api";
import { IProduct } from "./types";
import ProductListView from "./Components/ProductListView";
import ProductView from "./Components/ProductView";

function App() {
  const dispatch = useAppDispatch();
  const [sort, setSort] = useState<keyof IProduct>("name");

  function requireInput(product: IProduct) {
    if (
      product.name &&
      product.url &&
      product.stock &&
      product.weight &&
      product.height &&
      product.width
    )
      return true;
    return false;
  }

  function addProduct(
    e: React.MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    if (requireInput(product)) {
      product.id = Date.now()
      dispatch(hideModal());
      saveToDB(product);
      dispatch(addToList(product));
      dispatch(sortList(sort));
    }
  }

  // Not working need to fix IDs in Modal
  function editProduct(
    e: React.MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    if (requireInput(product)) {
      dispatch(hideModal());
      // saveToDB(product);
      dispatch(editListElement(product));
      dispatch(sortList(sort));
    }
  }

  function deleteProduct(id: number) {
    dispatch(deleteFromList(id));
    deleteFromDB(id);
  }

  function setResponse( products: IProduct[]) {
    dispatch(setProducts(products));
    dispatch(sortList(sort));
  }

  useEffect(() => {
    getProducts(setResponse);
  }, []);


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
          <Route path="/product/:id" element={<ProductView editProduct={editProduct}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
