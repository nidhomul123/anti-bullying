import React from "react";
import "../StyleSheet/Profil.css";
import { useState } from "react";
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux";
import { updateJadwal } from "../redux/action/profilAction";

function EditJadwalPraktek({ id, senin, selasa, rabu, kamis, jumat }) {
  const dispatch = useDispatch();
  console.log(senin);
  const [editSeninBuka, setEditSeninBuka] = useState(senin.buka);
  const [editSelasaBuka, setEditSelasaBuka] = useState(selasa.buka);
  const [editRabuBuka, setEditRabuBuka] = useState(rabu.buka);
  const [editKamisBuka, setEditKamisBuka] = useState(kamis.buka);
  const [editJumatBuka, setEditJumatBuka] = useState(jumat.buka);
  const [editSeninTutup, setEditSeninTutup] = useState(senin.tutup);
  const [editSelasaTutup, setEditSelasaTutup] = useState(selasa.tutup);
  const [editRabuTutup, setEditRabuTutup] = useState(rabu.tutup);
  const [editKamisTutup, setEditKamisTutup] = useState(kamis.tutup);
  const [editJumatTutup, setEditJumatTutup] = useState(jumat.tutup);
  let [jadwalpraktek, setJadwalPraktek] = useState("");

  jadwalpraktek = {
    senin: {
      buka: editSeninBuka,
      tutup: editSeninTutup,
    },
    selasa: {
      buka: editSelasaBuka,
      tutup: editSelasaTutup,
    },
    rabu: {
      buka: editRabuBuka,
      tutup: editRabuTutup,
    },
    kamis: {
      buka: editKamisBuka,
      tutup: editKamisTutup,
    },
    jumat: {
      buka: editJumatBuka,
      tutup: editJumatTutup,
    },
  };

  console.log(jadwalpraktek);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateJadwal(id, jadwalpraktek));

    setEditSeninBuka("");
    setEditSelasaBuka("");
    setEditRabuBuka("");
    setEditKamisBuka("");
    setEditJumatBuka("");
    setEditSeninTutup("");
    setEditSelasaTutup("");
    setEditRabuTutup("");
    setEditKamisTutup("");
    setEditJumatTutup("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="editprofilpsikolog">
          <h2>Jadwal Konsultasi</h2>
          <h6>Masukkan Jadwal dengan Waktu WIB</h6>
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
                  <input
                    type="text"
                    value={editSeninBuka}
                    onChange={(e) => setEditSeninBuka(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editSelasaBuka}
                    onChange={(e) => setEditSelasaBuka(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editRabuBuka}
                    onChange={(e) => setEditRabuBuka(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editKamisBuka}
                    onChange={(e) => setEditKamisBuka(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editJumatBuka}
                    onChange={(e) => setEditJumatBuka(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" className="table-primary">
                  <h6>Tutup</h6>
                </th>
                <td>
                  <input
                    type="text"
                    value={editSeninTutup}
                    onChange={(e) => setEditSeninTutup(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editSelasaTutup}
                    onChange={(e) => setEditSelasaTutup(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editRabuTutup}
                    onChange={(e) => setEditRabuTutup(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editKamisTutup}
                    onChange={(e) => setEditKamisTutup(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editJumatTutup}
                    onChange={(e) => setEditJumatTutup(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="button-edit p-3">
            <button className="btn btn-primary">Simpan Perubahan</button>
          </div>
        </div>
      </form>
    </div>

  );
}

EditJadwalPraktek.propTypes = {
  id: PropTypes.string,
  senin: PropTypes.any,
  selasa: PropTypes.any,
  rabu: PropTypes.any,
  kamis: PropTypes.any,
  jumat: PropTypes.any
};

export default EditJadwalPraktek;
