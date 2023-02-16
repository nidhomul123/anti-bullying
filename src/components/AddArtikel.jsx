
import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import { addArtikel } from "../redux/action/artikelAction";


function AddArtikel() {
  const [dataArt, setDataArt] = useState({});
  const dispatch = useDispatch();
  const [isi, setIsi] = useState("");
  const [judul, setJudul] = useState("")
  const [images, setImages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const img = URL.createObjectURL(images);

    dispatch(addArtikel(judul, isi, img));
    setJudul("")
    setIsi("");
    setImages("")
  };


  return (
    <div>
      <form className="artikelForm" onSubmit={handleSubmit}>
        <div className="judul">
          <label htmlFor="judul">Judul Artikel</label>
          <input
            type="text"
            placeholder=""
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div className="isi">
          <label htmlFor="Isi Artikel">IsiArtikel</label>
          <CKEditor
            // style={{
            //   width: "80vw",
            // }}
            editor={ClassicEditor}
            data=""
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              // console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setIsi(data);
            }}
            onBlur={(event, editor) => {
              // console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              // console.log("Focus.", editor);
            }}
          />

          <div className="cover">
            <label htmlFor="cover">Upload Image</label>
            <input
              type="file"
              placeholder=""
              multiple
              accept=".jpg"
              onChange={(e) => setImages(e.target.files[0])}
              // onChange={onImageChange}
            />
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddArtikel;
