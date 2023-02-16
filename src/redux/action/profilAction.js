import axios from 'axios'
export const SUCCESS_GET_PROFIL = "SUCCESS_GET_PROFIL"
export const SUCCESS_GET_PROFIL_ID = "SUCCESS_GET_PROFIL_ID"
export const SUCCESS_ADD_PROFIL = "SUCCESS_ADD_PROFIL"
export const SUCCESS_UPDATE_PROFIL = "SUCCESS_UPDATE_PROFIL"
export const SUCCESS_UPDATE_JADWAL = "SUCCESS_UPDATE_JADWAL"

function successGetProfil(data) {
  return {
    type: SUCCESS_GET_PROFIL,
    payload: data
  }
}

export const getProfil = () => {
  return async (dispatch) => {

    const result = await axios.get(
      "https://63819b489842ca8d3c9642d0.mockapi.io/user"
    )
    dispatch(successGetProfil(result.data))
  }
}

function successGetProfilId(data) {
  console.log(data)
  return {
    type: SUCCESS_GET_PROFIL_ID,
    payload: data
  }
}

export const getProfilId = (id) => {
  return async (dispatch) => {
console.log(id);
    const result = await axios.get(
      `https://63819b489842ca8d3c9642d0.mockapi.io/user/${id}`
    )
    dispatch(successGetProfilId(result.data))
  }
}

function successAddProfil(data) {
  console.log(data)
  return {
    type: SUCCESS_ADD_PROFIL,
    payload: data
  }
}

export const addProfil = (nama, email, password, status, jadwalpraktek) => {

  return async (dispatch) => {
    const result = await axios.post(
      "https://63819b489842ca8d3c9642d0.mockapi.io/user",
      {
        avatar: "https://assets.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=770",
        nama: nama,
        email: email,
        no: " - ",
        tempatkerja: " - ",
        alamat: " - ",
        gender: " - ",
        status: status,
        password: password,
        jadwalpraktek: jadwalpraktek,
        deskripsi:" - "
      }

    )
    dispatch(successAddProfil(result.data))
    console.log(result.data);
  }
}

function successUpdateProfil(data) {
  console.log(data);
  return {
    type: SUCCESS_UPDATE_PROFIL,
    payload: data
  }
}

export const updateProfil = (id, avatar, nama, email, no, tempatkerja, alamat, gender, deskripsi) => {
  console.log(avatar);

  return async (dispatch) => {

    const result = await axios.put(
      `https://63819b489842ca8d3c9642d0.mockapi.io/user/${id}`, { avatar: avatar, nama: nama, email: email, no: no, tempatkerja: tempatkerja, alamat: alamat, gender: gender ,deskripsi:deskripsi}
    )
    alert("data berhasil di update")
    dispatch(successUpdateProfil(result.data))
    
    console.log(result.data)
    // window.location = "/user/profil";
  }
}

function successUpdateJadwal(data) {
  return {
    type: SUCCESS_UPDATE_JADWAL,
    payload: data
  }
}

export const updateJadwal = (id, jadwalpraktek) => {

  return async (dispatch) => {

    const result = await axios.put(

      `https://63819b489842ca8d3c9642d0.mockapi.io/user/${id}`, { jadwalpraktek: jadwalpraktek}
    )
    alert("data berhasil di update")
    dispatch(successUpdateJadwal(result.data))
    console.log(result.data)
    // window.location = "/profil";
    
  }
}
