import logo from "../svg/download.svg";
import {descargarGif} from '../hooks/GifDownload'
export const BotonDescarga = (image) => {

  return (
    <div className="icons">
      <img src={logo} alt="Descargar" onClick={() => descargarGif(image.url, image.title)} />
    </div>
  );
};
