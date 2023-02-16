import React, { useEffect } from "react";
import "../StyleSheet/pageProfil.css";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfil } from "../redux/action/profilAction";

function JadwalPraktek({ id,nama, senin, selasa, rabu, kamis, jumat }) {
  console.log(senin);
  const [editJadwal, setEditJadwal] = useState(false);
  return (
    <div>
      <div className="profilpsikolog">
        <h4>Jadwal Konsultasi</h4>
        <table className="table table-bordered">
          <thead>
            <tr className="table-primary">
              <th scope="col">
                <h6>#</h6>
              </th>
              <th scope="col">
                <h6>Senin</h6>
              </th>
              <th scope="col">
                <h6>Selasa</h6>
              </th>
              <th scope="col">
                <h6>Rabu</h6>
              </th>
              <th scope="col">
                <h6>Kamis</h6>
              </th>
              <th scope="col">
                <h6>Jumat</h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="table-primary">
                <h6>Buka</h6>
              </th>
              <td>
                <h6>{senin.buka}</h6>
              </td>
              <td>
                <h6>{selasa.buka}</h6>
              </td>
              <td>
                <h6>{rabu.buka}</h6>
              </td>
              <td>
                <h6>{kamis.buka}</h6>
              </td>
              <td>
                <h6>{jumat.buka}</h6>
              </td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                <h6>Tutup</h6>
              </th>
              <td>
                <h6>{senin.tutup}</h6>
              </td>
              <td>
                <h6>{selasa.tutup}</h6>
              </td>
              <td>
                <h6>{rabu.tutup}</h6>
              </td>
              <td>
                <h6>{kamis.tutup}</h6>
              </td>
              <td>
                <h6>{jumat.tutup}</h6>
              </td>
            </tr>
          </tbody>
        </table>
        {!editJadwal && (
          <div id="jadwal">
            <Link
              to={`editjadwal/${id}/${nama}`}
              onClick={() => setEditJadwal(true)}>
              <button className="btn btn-primary p-2">Edit Jadwal</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default JadwalPraktek;
