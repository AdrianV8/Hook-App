import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (interationNumer = 100) =>{
    for (let i = 0; i < interationNumer; i++) {
      console.log('ahi vamos');
      
    }
    return `${interationNumer} iteracciones realizadas`
}



export const MemoHook = () => {
  
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  /**
   * useMemo -> Memoriza un valor
   * Sintaxis -> useMemo( [valor a memorizar], [dependencias] )
   *            *Array vacío en 'dependencias' -> []: Solo lo memoriza una vez*
   *            *Array con un valor dentro -> [valor]:  Se memoriza cada vez que dicho valor cambie*
   * 
   * --------------------------------
   * 
   * El valor, producto de heavyStuff(), será memorizado en 'memorizedValue' y SOLO
   * lo va a reprocesar si las dependencias cambian, es decir, reprocesalo cuando el valor del 
   * counter cambie
   */
   const memorizedValue = useMemo( () => heavyStuff(counter), [counter])
  return (
    <>
      <h1>Counter: <small>{counter}</small> </h1>
      <hr />


      <h4>{ memorizedValue }</h4>
      
      <button className="btn btn-success" onClick={() => increment(1)}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        {/* Para mostrar los true/false se debe de hacer con JSON.stringify */}
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
