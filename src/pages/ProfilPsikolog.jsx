// import JadwalPraktek from "../components/JadwalPraktek";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Profil from "../components/Profil";
import { getProfil, getProfilId } from "../redux/action/profilAction";
import JadwalPraktek from "../components/JadwalPraktek";
import { useParams } from "react-router-dom";

function ProfilPsikolog() {
  const { profil } = useSelector((state) => state.profil);
  let { id } = useParams()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfil());
  }, []);

  return (
    <div>
      {profil
        .filter((item) => item.id === id)
        .map((item) => {
        return (
          <div key={item.id}>
            <Profil
              
              id={item.id}
              img={item.avatar}
              nama={item.nama}
              email={item.email}
              no={item.no}
              tempatkerja={item.tempatkerja}
              alamat={item.alamat}
              gender={item.gender}
              status={item.status}
              deskripsi={item.deskripsi}
            />
            <JadwalPraktek
              id={item.id}
              nama={item.nama}
              senin={item.jadwalpraktek.senin}
              selasa={item.jadwalpraktek.selasa}
              rabu={item.jadwalpraktek.rabu}
              kamis={item.jadwalpraktek.kamis}
              jumat={item.jadwalpraktek.jumat}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProfilPsikolog;
