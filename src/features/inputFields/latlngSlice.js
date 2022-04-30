import { createSlice } from "@reduxjs/toolkit";
export const latlngSlice = createSlice({
  name: "coordinates",
  initialState: {
    lat: "",
    lng: "",
  },
  reducers: {
    updateCoords: (state, action) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const { updateCoords } = latlngSlice.actions;
export default latlngSlice.reducer;
