import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useParams, useResolvedPath } from "react-router-dom";
import { getProfil } from "../redux/action/profilAction";
import "../StyleSheet/Navbar.css";
// import logo from '../Asset/Navbar/LOGO.gif'

function Navbar({ admin, id }) {
  const { profil } = useSelector((state) => state.profil);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProfil());
  }, []);

  const logOut = () => {
    localStorage.setItem("isAuthenticated", "false");
  };


  return (
    <>
      <nav className="container navbar navbar-expand-lg bg-transparent p-3">
        <div className="img-nav container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/LOGO.png"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <CustomLink to={`${admin}/${id}`} className="nav-link" href="#">
                  Beranda
                </CustomLink>
              </li>
              <li className="nav-item text-decoration-none">
                <CustomLink
                  to={`${admin}/${id}/artikel`}
                  className="nav-link text-decoration-none"
                  href="#">
                  Artikel
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink
                  to={`${admin}/${id}/psikolog`}
                  className="nav-link"
                  href="#">
                  Psikolog
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink
                  to={`${admin}/${id}/komunitas`}
                  className="nav-link"
                  href="#">
                  Komunitas
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink
                  to={`${admin}/${id}/diskusi`}
                  className="nav-link"
                  href="#">
                  Diskusi
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink
                  to={`${admin}/${id}/faq`}
                  className="nav-link"
                  href="#">
                  FAQ
                </CustomLink>
              </li>
              <li className="nav-item d-lg-none">
                <CustomLink
                  to={`${admin}/${id}/profil`}
                  className="nav-link"
                  href="#">
                  Profil
                </CustomLink>
              </li>
              <li className="nav-item d-lg-none">
                <button onClick={logOut}>
                  <CustomLink to="/" className="nav-link" >
                  Log Out
                  </CustomLink>
                </button>
              </li>
            </ul>
          </div>
          {profil
            .filter((item) => item.id === id)
            .map((item) => {
              return (
                <div className="profil dropdown Account d-none d-lg-block" key={id}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <img src={item.avatar} alt="" />
                    {item.nama}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to={`${admin}/${id}/profil`}
                        className="dropdown-item"
                        href="#">
                        Profil
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button onClick={logOut}>
                        <CustomLink to="/" className="dropdown-item" >
                          Log Out
                        </CustomLink>
                      </button>
                    </li>
                  </ul>
                </div>
              );
            })}
        </div>
      </nav>
    </>
  );
  function CustomLink({ to, children }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <Link id={isActive ? "active" : ""} to={to}>
        {children}
      </Link>
    );
  }
}

export default Navbar;
