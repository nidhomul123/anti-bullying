import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArtikel } from "../redux/action/artikelAction";
import "../StyleSheet/detailArtikel.css";
import loading from "../Asset/homePage/login.gif";

function DetailArtikel() {
  const dispatch = useDispatch();
  const { article, isLoading } = useSelector((state) => state.artikel);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getArtikel());
  }, []);

  return (

    <>
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <img className="img-fluid" src={loading} alt="" />
        </div>
      ) : (
        article
          .filter((el) => el.id === id)
          .map((el) => {
            return(
              <div className="container detail-artikel" key={el.id}>
                <div className="row">
                  <div className="col-5 text-center d-flex justify-content-center mx-auto">
                    <div className="mx-auto">
                      <img className="img-thumbnail my-2" src={el.img} alt="" />
                    </div>
                  </div>
                  <div className="desc-artikel mx-auto col-12">
                    <div className="judul-artikel text-center">
                      <hr />
                      <h3>{el.judul}</h3>
                      <hr />
                    </div>
                    <div className="isi-artikel ">
                      <p dangerouslySetInnerHTML={{ __html: el.isi }}></p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
      )}
    </>

    
  );
}

export default DetailArtikel;
