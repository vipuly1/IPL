import React from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './Components/Players';
import Homepage from './Components/Homepage';
import Register from './Components/Register';
import Login from './Components/Login'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import ProtectedRoute from './Components/protectedRoute/ProtectedRoute';
import AddPlayer from './Components/AddPlayer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Homepage/></ProtectedRoute>}/>
        <Route path ="/register"  element={<Register/>}/>
        <Route path ="/login"  element={<Login/>}/>
        <Route path="/add-players" element={<AddPlayer/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
