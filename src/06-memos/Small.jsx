import { memo } from "react";

/**
 * `memo` -> 'Memoriza' el estado y no se ejecuta. 
 * Sinxtaxis -> const [nombre] = memo([resto de la función]);
 */
export const Small = memo(({value}) => {

    console.log('generar D:');

  return (
    <small> { value }</small>
  )
});
