import EditJadwalPraktek from "../components/EditJadwalPraktek";
import EditProfil from "../components/EditProfil";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { getProfilId } from "../redux/action/profilAction";
import { useParams } from "react-router-dom";

function EditProfilPsikolog() {
  const { profil } = useSelector((state) => state.profil);
  const dispatch = useDispatch();

  let { id } = useParams();
  
  useEffect(() => {
    dispatch(getProfilId());
  }, []);

  return (
    <div className="kontenKomponen">
      {profil
        .filter((item) => item.id === id)
        .map((item) => {
          return (
            <div key={item.id}>
              <EditProfil
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
            </div>
          );
        })}
    </div>
  );
}

export default EditProfilPsikolog;
