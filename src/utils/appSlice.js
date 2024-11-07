import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appslice",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toogleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export default appSlice.reducer;
export const { toogleMenu } = appSlice.actions;
