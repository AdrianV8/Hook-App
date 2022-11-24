import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

  const {user} = useContext( UserContext );


  return (
    <>
        {/* Si el user existe imprime el valor */}
        <h1>HomePage <small> { user?.nombre } </small></h1>
        <hr />

        <pre aria-label="pre">
          { JSON.stringify(user, null, 3) }
        </pre>
    </>
  )
}
