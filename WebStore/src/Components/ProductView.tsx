import React from "react";
import { useLocation } from "react-router-dom";
import { IProduct } from "../types";

import './ProductView.css'

interface StateProp {
  state: {
    data: IProduct;
  };
}

function ProductView() {
  const { state }: StateProp = useLocation();
  const { data } = state;

  return (
    <div>
      <img src={data.url} />
    </div>
  );
}

export default ProductView;
