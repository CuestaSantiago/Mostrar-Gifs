// comando para crear un componente de forma rápida rafc+tab

import { useState } from "react";

export const AddCategory = ({onNewValue}) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    // (e) => setInputValue(e.target.value)
    // console.log(event)
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return
    onNewValue(inputValue.trim())
    setInputValue('')
  };
  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
