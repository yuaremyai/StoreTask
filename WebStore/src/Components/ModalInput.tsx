import React from "react";

interface Props{
    label: string,
    placeholder: string,
    type: string,
    setValue: (v: string) => void,
    value: string
}


function ModalInput( {label, placeholder, type, setValue, value}: Props ) {
  
  
  return (
    <label>
      <p>{label}</p>
      <input className="modal_input" type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
    </label>
  );
}

export default ModalInput;
