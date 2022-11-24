import { useEffect, useState } from "react";

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  /**
   * Se ejecuta la función y al terminar (return) se 'libera' para ahorrar espacio en memoria
   */
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario registrado</h3>
      {JSON.stringify(coords)}
    </>
  );
};
