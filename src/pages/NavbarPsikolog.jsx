import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function NavbarPsikolog() {
  let { id } = useParams();
  return (
    <div>
      <Navbar admin={"/admin"} id={id} />
    </div>
  );
}

export default NavbarPsikolog;
