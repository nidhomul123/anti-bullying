import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home({ admin, id }) {
  
  return (
    <div className="kontenKomponen" id="home">
      <img
        src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/beranda.png"
        alt=""
      />
      <div className="header">
        <h1>Our Mission</h1>
        <h2 className="mt-2">
          Your <span>Smile</span> Beautifies The <span>world</span>
        </h2>
        <p className="mt-3">
          Ayo hentikan budaya bully di Indonesia, mari kita bangkit bersama
          bangun Indonesia lebih maju.
        </p>
        <p>
          <i>
            “Beri aku 1000 orang tua, niscaya akan kucabut Sumeru dari akarnya.
            Beri aku 10 pemuda, akan kuguncangan dunia” - Ir.Soekarna
          </i>
        </p>
      </div>
      <div className="kontenHome">
        <div className="textKonten">
          <h3>
            Butuh Teman Cerita?
          </h3>
          <p>Lihat daftar psikolog yang tersedia dan hubungi melalui wa</p>
          <Link to={`${admin}/${id}/psikolog`}>
             <button class="btn btn-primary">Psikolog</button>
          </Link>
        </div>
        <img
          src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/beranda2.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-5 " id="col1">
            <h3>
              Membutuhkan bantuan?
            </h3>
            <p>Lihat daftar komunitas yang dapat membantu anda</p>
            <Link to={`${admin}/${id}/komunitas`}>
              <button class="btn btn-primary">Komunitas</button>
            </Link>
          </div>
          <div className="col-5" id="col2">
            <h3>
              Berbagi Pengalaman dengan user lain
            </h3>
            <p>Ceritakan pengalamanmu atau masalahmu di forum diskusi</p>
            <Link to={`${admin}/${id}/diskusi`}>
            <button class="btn btn-primary">Diskusi</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
