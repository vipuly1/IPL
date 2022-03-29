import React from 'react';
import { Navigate} from "react-router-dom"
import { history  } from '../../App';

function ProtectedRoute({children}) {
    const loginStatus = localStorage.getItem("loginStatus")
  return (loginStatus ? children : <Navigate to="/login" />) ;
}

export default ProtectedRoute;
