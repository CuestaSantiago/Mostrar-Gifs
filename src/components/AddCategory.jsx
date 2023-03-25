// comando para crear un componente de forma rápida rafc+tab

import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState("One Punch");
  const onInputChange = ({ target }) => {
    // (e) => setInputValue(e.target.value)
    // console.log(event)
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return
    onAddCategory(cat => [inputValue, ...cat])
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
