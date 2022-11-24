import { useState } from "react"
import { UserContext } from "./UserContext"
// const user = {
//     id: 123,
//     nombre: "Adrian Lopera",
//     email: "adrian@google.com",
// }

// Childen -> Los hijos a los que se le van a pasar la info
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

  return (
    // Proveemos la información necesario en el value
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
  )
}
