import { combineReducers, createStore, applyMiddleware  } from "redux";
import artikelReducer from "../reducer/artikelReducer";
import profilReducer from "../reducer/profilReducer"
import thunk from "redux-thunk";

const allReducer = combineReducers({
    profil:profilReducer,
    artikel :artikelReducer
  })

const store = createStore(allReducer, applyMiddleware(thunk))

export default store