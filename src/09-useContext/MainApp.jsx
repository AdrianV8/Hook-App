import { Navigate, Route, Routes, Link } from "react-router-dom";
import { UserProvider } from "./context/UserProvider.jsx";
import { AboutPage, HomePage, LoginPage } from "./index.js";
import { NavBar } from "./NavBar.jsx";

export const MainApp = () => {
  return (
    
    <>
      <UserProvider>
        <h1>MainApp</h1>
        <NavBar/>      
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutPage />} />

          {/* Para rutas que no existan redireccionamos al about */}
          <Route path="/*" element={<Navigate to="/about" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
