import {React } from "react";
import { Navigate, useLocation} from "react-router-dom";


function Protected ({ children }) {
  const authed = localStorage.getItem("isAuthenticated");
  let location = useLocation();

  if (authed==="false") {
    return <Navigate to="/" state={{ from: location }} />;
  } 
    return children;

};


export default Protected;
