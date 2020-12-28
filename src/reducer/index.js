import { combineReducers } from "redux";
import authReducer from '../auth/service/reducer'
import appReducer from "../modules/app/service/reducer";

const rootReducer = combineReducers({
        authReducer,
  appReducer,
});







export default rootReducer;
