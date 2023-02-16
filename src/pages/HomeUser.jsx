import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function HomeUser() {
  let { id } = useParams();
  return (
    <div>
      <Home admin={"/user"} id={id} />
    </div>
  );
}

export default HomeUser;
