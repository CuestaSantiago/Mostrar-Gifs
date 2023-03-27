import { BotonDescarga } from "./BotonDescarga";

export const GifItem = (image) => {
 
  return (
    <>
      <div key={image.id} className="container">
        <p>{image.title}</p>
        <BotonDescarga key={image.id} {...image}/>
        <img
          src={image.url}
          alt={image.title}
        />
      </div>
    </>
  );
};
