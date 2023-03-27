// comando para crear un componente de forma rápida rafc+tab
import { useState } from "react";
import { AddCategory, GIfGrid  } from "./components/";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    const lowerCaseCategories = categories.map((cat) => cat.toLowerCase());
    if (lowerCaseCategories.includes(newCategory.toLowerCase()))
      return alert("ya esxiste ".concat(newCategory.toUpperCase()));
    setCategories((cat) => [newCategory, ...cat]);
  };


  return (
    <>

      <h1>Gif Expert App</h1>

      <AddCategory onNewValue={onAddCategory} />
        {categories.map((category) => (
           <GIfGrid key={category} category={category}/>
          )
        )}

    </>
  );
};
