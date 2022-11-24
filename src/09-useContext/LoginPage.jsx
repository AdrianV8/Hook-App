import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

const userInfo = {
    id: 123,
    nombre: "Adrian Lopera",
    email: "adrian@google.com",
}

  // Rescatamos la información usando 'useContext' e indicamos el contexto que queremos utilzar
  const {user, setUser} = useContext( UserContext );

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="pre">
        {
          JSON.stringify(user, null, 2)
        }
      </pre>

      <button 
        onClick={ () => setUser(userInfo) }
        className="btn btn-primary"
        aria-label="setUserButton">
        Establecer usuario
      </button>
    </>
  );
};
