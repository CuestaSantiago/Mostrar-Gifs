// comando para crear un componente de forma rápida rafc+tab
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GIfGrid } from "./components/GIfGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  if (true) {
    const [categories2, setCategories2] = useState([
      "One Punch",
      "Dragon Ball",
    ]);
  }
  const onAddCategory = (newCategory) => {
    const lowerCaseCategories = categories.map((cat) => cat.toLowerCase());
    if (lowerCaseCategories.includes(newCategory.toLowerCase()))
      return alert("ya esxiste ".concat(newCategory.toUpperCase()));
    setCategories((cat) => [newCategory, ...cat]);
  };
  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory onNewValue={onAddCategory} />
        {categories.map((category) => (
           <GIfGrid key={category} category={category}/>
          )
        )}

    </>
  );
};
