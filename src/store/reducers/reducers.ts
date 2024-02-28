import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import language from "./language";
import status from "./cart";

export default combineReducers({
  auth,
  language,
  status,
});
