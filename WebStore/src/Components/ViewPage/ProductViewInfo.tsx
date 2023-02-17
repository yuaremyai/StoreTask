import React from "react";
import { IProduct } from "../../types";
import ViewSpecsText from "./ViewSpecsText";

interface Props {
  data: IProduct;
  handleClick: () => void;
}

function ProductViewInfo({ data, handleClick }: Props) {
  return (
    <div className="view_wrapper">
      <img className="view_image" src={data.url} />
      <div className="view_info">
        <h2 className="view_title"> {data.name}</h2>
        <ViewSpecsText> {data.stock} in stock </ViewSpecsText>
        <ViewSpecsText>
          Size: {data.height} x {data.width}
        </ViewSpecsText>
        <ViewSpecsText> Weight: {data.weight} grams </ViewSpecsText>
        <button className="view_edit" onClick={handleClick}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default ProductViewInfo;
