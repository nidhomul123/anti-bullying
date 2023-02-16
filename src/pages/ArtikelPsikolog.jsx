import Artikel from '../components/Artikel'
import React, { useState } from "react";

import AddArtikel from '../components/AddArtikel';
import { Link } from 'react-router-dom';


function ArtikelPsikolog() {
  

  return (
    <div className="add-Artikel container kontenKomponen mt-3">
      <Link to={`addartikel`}>
        <button className="btn btn-primary">Add Artikel</button>
      </Link>
      <Artikel />
    </div>
  );
}

export default ArtikelPsikolog