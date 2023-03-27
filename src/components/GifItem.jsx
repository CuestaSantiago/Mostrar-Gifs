export const GifItem = ({ id, title, url }) => {

  return (
    <div key={id}>
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};
