import axios from 'axios'
export const FETCH_START = 'FETCH_START'
export const SUCCESS_GET_ARTIKEL = "SUCCESS_GET_ARTIKEL"
export const SUCCESS_ADD_ARTIKEL = "SUCCESS_ADD_ARTIKEL"

function fetchStart() {
  return {
    type: FETCH_START,
  }
}

function successGetArtikel(data) {
  return {
    type: SUCCESS_GET_ARTIKEL,
    payload: data
  }
}

export const getArtikel = () => {
  return async (dispatch) => {
    dispatch(fetchStart())
    const result = await axios.get(
      "https://63819b489842ca8d3c9642d0.mockapi.io/Article"
    )
    dispatch(successGetArtikel(result.data))
  }
}

function successAddArtikel(data) {
  return {
    type: SUCCESS_ADD_ARTIKEL,
    payload: data
  }
}

export const addArtikel = (judul, isi, img) => {
  return async (dispatch) => {
    dispatch(fetchStart())
    const result = await axios.post(
      "https://63819b489842ca8d3c9642d0.mockapi.io/Article",
      {judul,isi,img}
    )
    alert("data berhasil di tambahkan")
    dispatch(successAddArtikel(result.data))
    // window.location = `/artikel`;
  }
}