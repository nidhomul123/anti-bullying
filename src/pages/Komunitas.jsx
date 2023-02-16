import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../StyleSheet/Komunitas.css";
function Komunitas() {
  const navigation = useNavigate();
  const [user, setUser] = useState([]);
  const [provinsi, setProvinsi] = useState([]);
  const [dataProvinsi, setDataProvinsi] = useState(user);
  const [option, setOption] = useState([]);
  const [allData, setAllData] = useState(false);
  let [id, setId] = useState("");
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/komunitas"
        );
        setUser(response.data);
      } catch (error) {
        // console.error(error);
      }
    }

    console.log(user)

    getUser();
    // console.log(user);
    setDataProvinsi(user);
    setAllData(false);
  }, []);

  function filterUser() {
    user.filter(function (data) {
      if (data.provinsi === provinsi) {
        return setId(data.id), setAllData(true);
      } else if (provinsi === "") {
        return setAllData(false);
      }
      setDataProvinsi(user);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    filterUser();
  };

  const handleDetail = (id) => {
    navigation(`/DetailKomunitas/${id}`);
  };

  return (
    <div className="kontenKomponen">
      <div className="row " id="komunitas">
        <div className="col-lg-4 col-md-4 sol-sm-12 col-12 ">
          <div className="list-kota p-3">
            <div className="row d-flex justify-content-center">
              <div className="col-10">
                <form action="" onSubmit={handleSubmit}>
                  <select
                    onChange={(e) => setProvinsi(e.target.value)}
                    className="form-select form-select-sm">
                    {/* <option selected className='bg-transparent'>Lihat Daftar Kota</option>
                                    {komunitas.map((item,index) => 
                                        <option key={index} value={item.provinsi}>{item.provinsi}</option>
                                    )} */}
                    <option value="">Pilih provinsi</option>
                    <option value="DKI Jakarta">DKI Jakarta</option>;
                    <option value="Sumatera Utara">Sumatera Utara</option>
                    <option value="Bengkulu">Bengkulu</option>
                    <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                    <option value="Jawa Timur">Jawa Timur</option>
                    <option value="Banten">Banten</option>
                  </select>
                  <div className="button-komunitas mt-3 text-center">
                    <button className="btn btn-primary">Cari</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12 mt-3">
          {allData === true
            ? dataProvinsi
                .filter((el) => el.provinsi === provinsi)
                .map((item) => {
                  return (
                    <>
                      <div className="komunitas mb-3">
                        <div key={item.id} className="card mx-auto mb-3">
                          <div className="row">
                            <div className="profil-komunitas col-3 text-center">
                              <img
                                className="img-fluid p-2"
                                src={item.picture}
                                alt=""
                              />
                              <h6 className="p-2">{item.provinsi}</h6>
                            </div>
                            <div className="deskripsi-komunitas col-6 d-flex flex-column">
                              <h6 className="mt-2">
                                <b>{item.Nama}</b>
                              </h6>
                              <h5>
                                <i>"{item.selogan}"</i>
                              </h5>
                              <div className="alamat-komunitas mt-auto">
                                <h5>{item.alamat}</h5>
                              </div>
                            </div>
                            <div className="show-komunitas col-3 d-flex align-items-center justify-content-center">
                              <Link
                                to={`detailkomunitas/${item.id}`}
                                className="nav-link">
                                <button className="btn btn-primary">
                                  Lihat
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
            : user.map((item) => {
                return (
                  <>
                    <div className="komunitas mb-3">
                      <div key={item.id} className="card mx-auto mb-3">
                        <div className="row">
                          <div className="profil-komunitas col-3 text-center">
                            <img
                              className="img-fluid p-2"
                              src={item.picture}
                              alt=""
                            />
                            <h6 className="p-2">{item.provinsi}</h6>
                          </div>
                          <div className="deskripsi-komunitas col-6 d-flex flex-column">
                            <h6 className="mt-2">
                              <b>{item.Nama}</b>
                            </h6>
                            <h5>
                              <i>"{item.selogan}"</i>
                            </h5>
                            <div className="alamat-komunitas mt-auto">
                              <h5>{item.alamat}</h5>
                            </div>
                          </div>
                          <div className="show-komunitas col-3 d-flex align-items-center justify-content-center">
                            <Link
                              to={`detailkomunitas/${item.id}`}
                              className="nav-link">
                              <button className="btn btn-primary">Lihat</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Komunitas;
