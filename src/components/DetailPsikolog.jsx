import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfil } from "../redux/action/profilAction";
import "../StyleSheet/detailPsikolog.css";
import loading from "../Asset/homePage/login.gif";
import hospital from "../Asset/DetailPsikolog/hospital.png";
import psikolog from "../Asset/DetailPsikolog/psikolog.png";
import JadwalPraktek from "./JadwalPraktek";

function DetailPsikolog() {
  const dispatch = useDispatch();
  const { profil, isLoading } = useSelector((state) => state.profil);
  let { id } = useParams();

  console.log(profil);

  useEffect(() => {
    dispatch(getProfil());
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <img className="img-fluid" src={loading} alt="" />
        </div>
      ) : (
        profil
          .filter((item) => item.id === id)
          .map((item) => {
            return (
              <div className="container detaiPsikolog mt-3 mb-3" key={item.id}>
                <div className="detail-psikolog row mx-auto">
                  <div className="col-lg-3 col-md-5 col-7 mx-auto">
                    <img className="mt-3 img-fluid" src={item.avatar} alt="" />
                  </div>
                  <div className="psikolog-name col-lg-7 col-md-6 col-12 m-3">
                    <table>
                      <tbody>
                        <tr>
                          <td className="icon-psikolog p-3">
                            <img src={hospital} alt="" />
                          </td>
                          <td className="detail-psikolog ">
                            <h4>{item.nama}</h4>
                          </td>
                        </tr>
                        <tr>
                          <td className="icon-psikolog p-3">
                            <img src={psikolog} alt="" />
                          </td>
                          <td className="detail-psikolog ">
                            <h6>{item.tempatkerja}</h6>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-center mt-3 w-100">
                      <a href={`https://wa.me/628${item.no}`}>
                        Hubungi melalui WA
                      </a>
                    </div>
                  </div>
                  <div className="deskripsi-psikolog col-12 mt-3">
                    <p dangerouslySetInnerHTML={{ __html: item.deskripsi }}></p>
                  </div>
                  <div className="jadwal-psikolog col-12 mt-3">
                    <table className="jadwal-psikolog w-100">
                      <tbody>
                        <tr>
                          <td></td>
                          <td>
                            <b>Senin</b>
                          </td>
                          <td>
                            <b>Selasa</b>
                          </td>
                          <td>
                            <b>Rabu</b>
                          </td>
                          <td>
                            <b>Kamis</b>
                          </td>
                          <td>
                            <b>Jumat</b>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <hr />
                          </td>
                          <td>
                            <hr />
                          </td>
                          <td>
                            <hr />
                          </td>
                          <td>
                            <hr />
                          </td>
                          <td>
                            <hr />
                          </td>
                          <td>
                            <hr />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>Buka</b>
                          </td>
                          <td>{item.jadwalpraktek.senin.buka}</td>
                          <td>{item.jadwalpraktek.selasa.buka}</td>
                          <td>{item.jadwalpraktek.rabu.buka}</td>
                          <td>{item.jadwalpraktek.kamis.buka}</td>
                          <td>{item.jadwalpraktek.jumat.buka}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Tutup</b>
                          </td>
                          <td>{item.jadwalpraktek.senin.tutup}</td>
                          <td>{item.jadwalpraktek.selasa.tutup}</td>
                          <td>{item.jadwalpraktek.rabu.tutup}</td>
                          <td>{item.jadwalpraktek.kamis.tutup}</td>
                          <td>{item.jadwalpraktek.jumat.tutup}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })
      )}
    </>
  );
}

export default DetailPsikolog;
