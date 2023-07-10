import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({
  name: "booking",
  initialState: {
    booking: [],
  },
  reducers: {
    savedPlaces: (state, actions) => {
      state.booking.push({ ...actions.payload });
    },
  },
});

export const { savedPlaces } = SavedSlice.actions;

export default SavedSlice.reducer;
