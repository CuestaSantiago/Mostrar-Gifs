export const descargarGif = (url, title) => {
    fetch(url)
      .then((respuesta) => respuesta.blob())
      .then((blob) => {
        const urlDescarga = URL.createObjectURL(blob);
        const enlace = document.createElement("a");
        enlace.href = urlDescarga;
        enlace.download = `${title}.gif`;
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
      });
  };