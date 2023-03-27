// comando para crear un componente de forma rápida rafc+tab

import { useEffect, useState } from "react";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const onInputChange = ({ target }) => {
    // (e) => setInputValue(e.target.value)
    // console.log(event)
    setInputValue(target.value);
    setIsEmpty(target.value.length >= 1);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewValue(inputValue.trim());
    setInputValue("");
    setIsEmpty(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      {isEmpty && <button type="submit" className="boton">Buscar</button>}
    </form>
  );
};
