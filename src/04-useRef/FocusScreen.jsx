import { useRef } from "react";

export const FocusScreen = () => {

  const inputRef = useRef(); // -> Referencia para apuntar a cualquier cosa

    const setFocus = () =>{
        // console.log(inputRef);
        inputRef.current.select();
    }


  return (
    <>
      <h1>Focus Screen</h1>
      <input
        ref={inputRef} // Referencia al inputRef
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <button className="btn btn-warning mt-2" onClick={setFocus}>
        Set focus
      </button>
    </>
  );
};
