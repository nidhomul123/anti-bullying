import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProfil } from "../redux/action/profilAction";
import pic from "../Asset/Login/picture.png";
import "../StyleSheet/Login.css";
import logo from "../Asset/Navbar/LOGO.gif";
import Login from "./Login";
import { Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  let [jadwalpraktek, setJadwalpraktek] = useState("");

  jadwalpraktek = {
    senin: {
      buka: " - ",
      tutup: " - ",
    },
    selasa: {
      buka: " - ",
      tutup: " - ",
    },
    rabu: {
      buka: " - ",
      tutup: " - ",
    },
    kamis: {
      buka: " - ",
      tutup: " - ",
    },
    jumat: {
      buka: " - ",
      tutup: " - ",
    },
  };

  console.log(jadwalpraktek);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(status);

    if ((username, email, password, status === "psikolog")) {
      return (
        dispatch(addProfil(username, email, password, status, jadwalpraktek)),
        alert("Registrasi Anda Berhasil, silahkan login"),
        (window.location = "/login")
      );
    } else if ((username, email, password, status === "user")) {
      return (
        dispatch(addProfil(username, email, password, status)),
        alert("Registrasi Anda Berhasil, silahkan login"),
        (window.location = "/login")
      );
    } else {
      return alert("lengkapi data anda");
    }

    // dispatch(addProfil(username, email, password, status));
    setUsername("");
    setEmail("");
    setPassword("");
    setStatus("");
  };

  return (
    <div className="profil">
      <div className="row">
        <div className="kolom-register  mx-auto p-4">
          <div className="logo text-center ">
            <img className="mx-auto" src={logo} alt="" />
          </div>
          <h3 className="text-center">Register</h3>
          <form onSubmit={handleSubmit}>
            <div class="input-value mb-3">
              <label for="InputEmail" class="form-label">
                Email:
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                id="InputEmail"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="input-value mb-3">
              <label for="InputUsername" class="form-label">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                class="form-control"
                id="InputUsername"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="input-value mb-3">
              <label for="InputPassword" class="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                class="form-control"
                id="InputPassword"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="input-value mb-3">
              <label for="inputStatus" class="form-label">
                Status Pengguna
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                class="form-select"
                aria-label="Default select example">
                <option selected>Daftar Sebagai</option>
                <option value="user">User</option>
                <option value="psikolog">Psikolog</option>
              </select>
            </div>
            <div className="button-input-value text-center">
              <button class="btn btn-light">Daftar</button>
            </div>
          </form>
          <div className="come-register text-center mt-2">
            <Link className="text-decoration-none" to={`/login`}>
              <h6 className="text-decoration-none">
                Sudah punya akun? <b>Masuk</b>
              </h6>
            </Link >
          </div>
        </div>
        <div className="img-register d-none d-md-block">
          <img className="" src={pic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;
