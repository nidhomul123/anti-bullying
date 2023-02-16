import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Profil from "../components/Profil"
import { getProfil, getProfilId } from "../redux/action/profilAction";
import { useParams } from "react-router-dom";

function ProfilUser() {
  const dispatch = useDispatch();
  const { profil } = useSelector((state) => state.profil);
  let { id } = useParams();
  

  useEffect(() => {
    dispatch(getProfil());
  }, []);

  return (
    <div className="profiluser">
      {profil
        .filter((item) => item.id === id)
        .map((profil) => {
          return (
            <Profil
              key={profil.id}
              id={profil.id}
              img={profil.avatar}
              nama={profil.nama}
              email={profil.email}
              no={profil.no}
              tempatkerja={profil.tempatkerja}
              alamat={profil.alamat}
              gender={profil.gender}
              status={profil.status}
              deskripsi={profil.deskripsi}
            />
          );
        })}
    </div>
  );
}

export default ProfilUser