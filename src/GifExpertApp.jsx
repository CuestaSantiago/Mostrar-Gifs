// comando para crear un componente de forma rápida rafc+tab
import { useState } from "react";
import {AddCategory} from './components/AddCategory'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  if (true) {
    const [categories2, setCategories2] = useState([
      "One Punch",
      "Dragon Ball",
    ]);
  }
  const onAddCategory = () => {
    // setCategories([...categories,'One Pice'])
    // setCategories(categories.concat(["One Pice"]));
    // setCategories(cat => cat.concat(["One Pice"]))
    setCategories((cat) => ["One Pice", ...cat]);
  };
  return (
    <>
      {/* titulo de la aplicacion */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory onAddCategory={ setCategories } />
      
      {/* Listado de Gif */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
