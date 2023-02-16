import React from "react";

function Faq() {
  return (
    <div className="kontenKomponen">
      <div className="faq">
        <h1>FAQ</h1>
        <p>Frequently Ask Question</p>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne">
                Bagaimana cara agar terhindar dari bullying?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Anda dapat membuka artikel pada halaman artikel.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo">
                Bagaimana cara konsultasi ke psikolog terhadap kasus bullying?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Anda dapat membuka halaman psikolog dan temukan psikolog yang
                anda minati lalu hubungi melalui wa yang telah disediakan sesuai
                dengan jadwal yang tertera
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree">
                Apa yang harus saya lakukan untuk berbagi pengalaman terkait
                kasus bullying?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Anda dapat membuka menu diskusi dan bagikan pengalaman anda
                dengan user yang lain
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Faq;
