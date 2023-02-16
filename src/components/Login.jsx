import { getProfil, getProfilId } from "../redux/action/profilAction";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import pic from "../Asset/Login/picture.png";
import "../StyleSheet/Login.css";
import logo from "../Asset/Navbar/LOGO.gif";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const { profil } = useSelector((state) => state.profil);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState({ value: "" });

  useEffect(() => {
    dispatch(getProfil());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setErrorMessage(() => ({
        value: "empty username/password field",
      }));
      alert("username/password belum diisi");
    }

    {
      profil
        .filter(
          (item) =>
            item.nama === username &&
            item.password === password &&
            item.status === "user"
        )
        .map((item) => {
          return (
            localStorage.setItem("isAuthenticated", "true"),
            alert("berhasil login user"),
            dispatch(getProfilId(item.id)),
            (window.location = `/user/${item.id}`)
          );
        });
    }

    {
      profil
        .filter(
          (item) =>
            item.nama === username &&
            item.password === password &&
            item.status === "psikolog"
        )
        .map((item) => {
          return (
            localStorage.setItem("isAuthenticated", "true"),
            alert("berhasil login psikolog"),
            dispatch(getProfilId(item.id)),
            (window.location = `/admin/${item.id}`)
          );
        });
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="profil">
      <div className="row">
        <div className="kolom-register mx-auto p-4">
          <div className="logo text-center ">
            <img className="mx-auto" src={logo} alt="" />
          </div>
          <h3 className="text-center">LOGIN</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-value mb-3">
              <label htmlFor="InputUsername" className="form-label">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="form-control"
                id="InputUsername"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="input-value mb-3">
              <label htmlFor="InputPassword" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="InputPassword"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="button-input-value text-center">
              <button className="btn btn-light">Masuk</button>
            </div>
          </form>
          <div className="come-register text-center mt-2">
            <Link className="text-decoration-none" to={`/register`}>
              <h6 className="text-decoration-none">
                Belum punya akun? <b>Daftar disini</b>
              </h6>
            </Link>
          </div>
        </div>

        <div className="img-register d-none d-md-block" style={{padding:0}}>
          <img className="" src={pic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
