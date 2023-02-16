import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

function HomePsikolog() {
  let { id } = useParams();
  return (
    <div>
      <Home admin={"/admin"} id={id} />
    </div>
  );
}

export default HomePsikolog;
