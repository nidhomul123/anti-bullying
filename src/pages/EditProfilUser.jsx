import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import EditProfil from "../components/EditProfil";
import { getProfilId, getProfil } from "../redux/action/profilAction";
import { useParams } from "react-router-dom";

function EditProfilUser() {
  const { profil } = useSelector((state) => state.profil);

  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getProfil());
  }, []);


  return (
    <div className="kontenKomponen">
      {profil
        .filter((item) => item.id === id)
        .map((profil) => {
          return (
            <EditProfil
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

export default EditProfilUser;
