import React, { useState } from "react";
import "./ProductCard.css";
import ProductCardText from "./ProductCardText";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types";

interface Props {
  product: IProduct;
  deleteProduct: (id: number) => void;
}

function ProductCard({ product, deleteProduct }: Props) {
  const [confirm, setConfirm] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/product/${product.id}`, { state: { data: product } });
  }
  return (
    <div className="product_card_wrapper">
      <img
        className="product_image"
        onClick={handleNavigate}
        src={product.url}
        alt=""
      />
      <ProductCardText>{product.name}</ProductCardText>
      <ProductCardText>{product.stock} in stock</ProductCardText>
      <ProductCardText>{product.weight} g</ProductCardText>
      {confirm ? (
        <div className="product_deletion_buttons">
          <button
            className="product_button_confirm"
            onClick={() => deleteProduct(product.id)}
          >
            Confirm
          </button>
          <button
            className="product_button_cancel"
            onClick={() => setConfirm(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="product_button_delete"
          onClick={() => setConfirm(true)}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default ProductCard;
