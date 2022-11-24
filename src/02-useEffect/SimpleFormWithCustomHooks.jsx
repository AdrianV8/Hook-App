import { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { useReset } from "../hooks/useReset";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

  const {formState, onResetForm, onInputChange, username, email, password} = useForm({
    username: "",
    email: "",
    password: "",
  })





  return (
    <>
      <h1>Formulario con custom hooks</h1>
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
      <input
        type="password"
        name="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        value={password}
        onChange={onInputChange}
      />

      <button  className="btn btn-success mt-2" onClick={onResetForm} >Limpiar campos</button>

      {username === "Adriana" && <Message />}
    </>
  );
};
