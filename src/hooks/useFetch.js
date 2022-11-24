import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    /**
     * Al iniciar la petición aseguramos que está cargando
     * isLoading = true
     */
    setState({
      ...state, //-> Desestructuración de los valores (data, isLoagind, hasError)
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    //-> Actualizar el estado con los datos (data) y todas sus propiedades
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch(); // -> Ejeceución de la llamada a la API
  }, [url]); // -> Cada vez que se cambie el `url` se dispara, si es el mismo no hace nada


  /**
   * Desestructuración de los valores (data, isLoagind, hasError)
   * Devolvemos todos los valores (modificados previamente) de useState();
   */
  return {
    ...state,
  };
};
