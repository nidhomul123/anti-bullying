import React from "react";
import { Outlet } from "react-router-dom";
import Artikel from "../components/Artikel";
import DetailArtikel from "../components/DetailArtikel";
import Navbar from "../components/Navbar";

function ArtikelUser() {
  return (
    <div>
      {/* <Outlet> */}
      {/* <Navbar/> */}
      <Artikel />
    </div>
  );
}

export default ArtikelUser;
