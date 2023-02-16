// import React from 'react'
import {
  SUCCESS_GET_PROFIL,
  SUCCESS_GET_PROFIL_ID,
  SUCCESS_ADD_PROFIL,
  SUCCESS_UPDATE_JADWAL,
  SUCCESS_UPDATE_PROFIL,
} from "../action/profilAction";

const initialState = {
  profilId: [],
  profil: [],
  err: null,
};

const profilReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_PROFIL:
      return {
        ...state,
        profil: action.payload,
      };
    case SUCCESS_GET_PROFIL_ID:
      return {
        ...state,
        profil: action.payload,
      };
    case SUCCESS_ADD_PROFIL:
      return {
        profil: [state, action.payload],
      };

    case SUCCESS_UPDATE_PROFIL:
      const newData = state.profil.filter(
        (data) => data.id != action.payload.id
      );
      return {
        ...state,
        newData: newData.push(action.payload),
        profil: newData,
      };
    case SUCCESS_UPDATE_JADWAL:
      const newJadwal = state.profil.filter(
        (data) => data.id != action.payload.id
      );
      return {
        ...state,
        newJadwal: newJadwal.push(action.payload),
        profil: newJadwal,
      };

    default:
      return state;
  }
};

export default profilReducer;
