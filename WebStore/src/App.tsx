import { useState } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import Modal from "./Components/Modal";
import { showModal } from "./store/modalSlice";

function App() {
  const dispatch = useDispatch();
  const modal = useSelector<RootState>((state) => state.modal.modal);



  return (
    <div className="App">
      <button onClick={() => dispatch(showModal())}>Click</button>
      <Modal />
    </div>
  );
}

export default App;
