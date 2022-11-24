import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Adrian",
    email: "adrian@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // Actualizamos el estado (visible en components)
    setFormState({
        ...formState,
        [name]: value
    })
  };

  /**
   * useEffect sirve para lanzar efectos secundarios
   * useEffect(función, dependencia)
   * Si en la 'dependencia' se pone un array vaciío '[]' solo se disparará una vez
   */
  useEffect(() =>{
    // console.log('Called!');
  }, [ ])

  // Este efecto se dispara cuando solo se cambia el formulario (formState)
  useEffect(() =>{
    // console.log('FormState changed!');
  }, [formState])

  useEffect(() =>{
    // console.log('Email changed!');
  }, [email])

  return (
    <>
      <h1>Formulario</h1>
      <hr />
      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        name="email"
        className="form-control mt-2"
        placeholder="Email"
        value={email}
        onChange={onInputChange}
      />

      {
        username === 'Adriana' && <Message/>
      }

    </>
  );
};
