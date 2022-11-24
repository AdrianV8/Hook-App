import { useState } from "react";

export const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // Actualizamos el estado (visible en Components)
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Limpiar los campos del formulario
  const onResetForm = () =>{
    setFormState(initialForm)
  }


  return {
    ...formState,
    onResetForm,
    formState,
    onInputChange,

  };
};


