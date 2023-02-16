import "../StyleSheet/Profil.css";
import EditProfil from "./EditProfil";
import { Icon } from "@iconify/react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfil } from "../redux/action/profilAction";
import name from "../Asset/profil/name.png";
import picgender from "../Asset/profil/gender.png";
import job from "../Asset/profil/job.png";
import phone from "../Asset/profil/phone.png";
import addres from "../Asset/profil/alamat.png";
import "../StyleSheet/pageProfil.css";

function Profil({
  id,
  img,
  nama,
  email,
  no,
  tempatkerja,
  alamat,
  gender,
  deskripsi,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfil());
  }, []);

  const [editProfil, setEditProfil] = useState(false);

  return (
    <div className="">
      <div className="container profil-user mt-4">
        <div className="profil-user row mx-auto">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center mt-2">
            <div className="foto-profil d-flex justify-content-center">
              <img src={img} className="img-thumbnai my-2" alt="..." />
            </div>
            {!editProfil && (
              <div id="more" className="mt-3">
                <Link
                  to={`editprofil/${id}/${nama}`}
                  onClick={() => setEditProfil(true)}>
                  <button className="btn-edit btn btn-primary">Edit</button>
                </Link>
              </div>
            )}
          </div>
          <div className="desc-table col-lg-6 col-md-6 col-sm-12 col-12 mt-2 mb-5">
            <table className="w-100">
              <tbody>
                <tr>
                  <td className="icon-desc p-1">
                    <img src={name} alt="" />
                  </td>
                  <td>
                    <h6>{nama}</h6>
                  </td>
                </tr>
                <tr>
                  <td className="icon-desc p-1">
                    <img src={phone} alt="" />
                  </td>
                  <td>
                    <h6>+62{no}</h6>
                  </td>
                </tr>
                <tr>
                  <td className="icon-desc p-1">
                    <img src={job} alt="" />
                  </td>
                  <td>
                    <h6>{tempatkerja}</h6>
                  </td>
                </tr>
                <tr>
                  <td className="icon-desc p-1">
                    <img src={addres} alt="" />
                  </td>
                  <td>
                    <h6>{alamat}</h6>
                  </td>
                </tr>
                <tr>
                  <td className="icon-desc p-1">
                    <img src={picgender} alt="" />
                  </td>
                  <td>
                    <h6>{gender}</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div id="deskripsi">
            <h5>About Me</h5>
            <p dangerouslySetInnerHTML={{ __html: deskripsi }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
