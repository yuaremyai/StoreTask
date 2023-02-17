import React, {useState} from "react";
import { IProduct } from "../../types";
import './DropDown.css'

interface Props{
  sort: string,
  setSort: (e: keyof IProduct) => void
}

function DropDown({ sort, setSort }: Props) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  };

  function handleClick(sort: keyof IProduct) {
    setSort(sort)
    setOpen(false)
  }

  return (
    <div className="dropdown">
      <button className="dropdown_open_button" onClick={handleOpen}>Sort by: {sort}</button>
      {open ? (
        <ul className="menu">
          <li className="menu_item">
            <button onClick={ () => handleClick('name')}>Name</button>
          </li>
          <li className="menu_item">
            <button onClick={ () => handleClick('weight')}>Weight</button>
          </li>
          <li className="menu_item">
            <button onClick={ () => handleClick('stock')}>Stock</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default DropDown;
