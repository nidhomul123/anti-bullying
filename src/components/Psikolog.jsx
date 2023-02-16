import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../StyleSheet/Komunitas.css";
import "../StyleSheet/Psikolog.css";
import loading from "../Asset/homePage/login.gif";
import { getProfil } from "../redux/action/profilAction";
import { useDispatch, useSelector } from "react-redux";

function Psikolog() {
  const { profil, isLoading } = useSelector((state) => state.profil);

  console.log(profil);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfil());
  }, []);

  return (
    <div className="Psikolog mb-3">
      <div className="container d-flex align-items-center flex-column">
        {isLoading ? (
          <div className="d-flex align-items-center justify-content-center vh-100">
            <img className="img-fluid" src={loading} alt="" />
          </div>
        ) : (
          profil
            .filter((item) => item.status === "psikolog")
            .map((item) => {
              return (
                <div key={item.id} className="card-komunitas" id="psikolog">
                  <div className="komunitas mb-3">
                    <div className="psikologCard">
                      <div className="profil-komunitas">
                        <img className="img-fluid" src={item.avatar} alt="" />
                        <div className="deskripsi-komunitas  d-flex flex-column">
                          <h6 className="mt-2">
                            <b>{item.nama}</b>
                          </h6>
                          <div className="alamat-komunitas mt-auto">
                            <h5>{item.tempatkerja}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="show-komunitas">
                        <Link
                          to={`detailPsikolog/${item.id}`}
                          className="nav-link">
                          <button className="btn btn-primary">Lihat</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
}

export default Psikolog;
