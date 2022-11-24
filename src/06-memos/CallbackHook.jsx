import { useCallback, useState } from "react";
import { ShowIncrement, ShowIncrementV2 } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  /**
   * useCallback() -> Similar al useMemo, pero este memoriza ¡FUNCIONES!
   * Sintaxis -> useCallback( [Callback a ejecutar], [dependencias] )
   *            *Array vacío en 'dependencias' -> []: Solo lo memoriza una vez*
   *            *Array con un valor dentro -> [valor]:  Se memoriza cada vez que dicho valor cambie*
   */
  const increment = useCallback(() => {
    /**
     * Guarda el valor (value) en memoria haciendo que no 
     * se cambien su espacio reservado en la misma, permitiendo
     * sumar uno sin que se ejecute más veces la función/componente 'ShowIncrement'
     */
    setCounter((value) => value + 1);
  }, []);

  // Incremento con argmumentos
  const incrementWithArguments = useCallback(
    (value) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement increment={increment} />

      <h1>useCallback Hook (con argumentos): {counter} </h1>
      <hr />

      <ShowIncrementV2 increment={incrementWithArguments} />
    </>
  );
};
