import PsikologAlur from "./Alur/PsikologAlur";
import User from "./Alur/User";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, Router, Navigate, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeLogin from "./pages/HomeLogin";
import Psikolog from "./components/Psikolog";
import { useState } from "react";
import auth from "./components/Auth";
import Protected from "./pages/Protected";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomeLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login/*" element={<Login />} />
          <Route
            path="/user/:id/*"
            element={
              <Protected>
                <User />
              </Protected>
            }
          />
          <Route
            path="/admin/:id/*"
            element={
              <Protected>
                <PsikologAlur />
              </Protected>
            }
          />
        </Routes>
      </header>
    </div>
  );
}


export default App;
