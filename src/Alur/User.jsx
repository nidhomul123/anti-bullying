import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import HomeUser from "../pages/HomeUser";
import ArtikelUser from "../pages/ArtikelUser";
import DetailArtikel from "../components/DetailArtikel";
import Diskusi from "../components/Diskusi";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import ProfilUser from "../pages/ProfilUser";
import EditProfilUser from "../pages/EditProfilUser";
import Psikolog from "../components/Psikolog";
import Profil from "../pages/Profil";
import Artikel from "../pages/Artikel";
import Komunitas from "../pages/Komunitas";
import DetailKomunitas from "../pages/DetailKomunitas";
import Login from "../components/Login";
import NavbarUser from "../pages/NavbarUser";
import OutletKomunitas from "../pages/OutletKomunitas";
import OutletPsikolog from "../pages/OutletPsikolog";
import DetailPsikolog from "../components/DetailPsikolog";
import AddArtikel from "../components/AddArtikel";

function User() {
  return (
    <div className="kontenKomponen">
      <NavbarUser />
      {/* <p>hai</p> */}
      <Routes>
        {/* <Route path="/userlogin" element={<Login />} /> */}
        <Route path="/" element={<HomeUser />} />
        <Route path="/artikel" element={<Artikel />}>
          <Route index element={<ArtikelUser />} />
          <Route path="detailartikel/:id/:judul" element={<DetailArtikel />} />
        </Route>
        <Route path="/komunitas" element={<OutletKomunitas />}>
          <Route index element={<Komunitas />} />
          <Route path="detailkomunitas/:id" element={<DetailKomunitas />} />
        </Route>
        <Route path="/diskusi" element={<Diskusi />} />
        <Route path="/psikolog" element={<Psikolog />} />
        <Route path="/psikolog" element={<OutletPsikolog />}>
          <Route index element={<Psikolog />} />
          <Route path="detailpsikolog/:id" element={<DetailPsikolog />} />
        </Route>
        <Route path="/faq" element={<Faq />} />
        <Route path="profil" element={<Profil />}>
          <Route index element={<ProfilUser />} />
          <Route path="editprofil/:id/:nama" element={<EditProfilUser />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default User;
