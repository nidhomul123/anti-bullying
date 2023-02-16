import EditProfil from "../components/EditProfil";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { getProfil } from "../redux/action/profilAction";
import EditJadwalPraktek from "../components/EditJadwalPraktek";
import { useParams } from "react-router-dom";

function EditJadwalPsikolog() {
  const { profil } = useSelector((state) => state.profil);
  const dispatch = useDispatch();

  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(getProfil());

  }, []);
  return (
    <div>
      {profil
        .filter((item) => item.id === id)
        .map((item) => {

          return (
            <EditJadwalPraktek
              key={item.id}
                id={item.id}
                senin={item.jadwalpraktek.senin}
                selasa={item.jadwalpraktek.selasa}
                rabu={item.jadwalpraktek.rabu}
                kamis={item.jadwalpraktek.kamis}
                jumat={item.jadwalpraktek.jumat}
              />
          );
        })}
    </div>
  );
}

export default EditJadwalPsikolog