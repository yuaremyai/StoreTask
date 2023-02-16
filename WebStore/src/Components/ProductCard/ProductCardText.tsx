import React from "react";

interface Props {
  children: React.ReactNode;
}

function ProductCardText({ children }: Props) {
  return <p className="product_text">{children}</p>;
}

export default ProductCardText;
