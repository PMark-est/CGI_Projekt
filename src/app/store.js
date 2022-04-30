import { configureStore } from "@reduxjs/toolkit";
import locationDataReducer from "../features/getLocationData/calculatorSlice";
import latlngReducer from "../features/inputFields/latlngSlice";

export const store = configureStore({
  reducer: {
    latlng: latlngReducer,
    data: locationDataReducer,
  },
});
