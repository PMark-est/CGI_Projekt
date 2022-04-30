import { createSlice } from "@reduxjs/toolkit";
//
export const locationDataSlice = createSlice({
  name: "locationData",
  initialState: {
    date: "",
  },
  reducers: {
    updateData: (state, action) => {
      state.date = action.payload.date; // Stored in milliseconds as a Date object
    },
  },
});

export const { updateData } = locationDataSlice.actions;
export default locationDataSlice.reducer;
