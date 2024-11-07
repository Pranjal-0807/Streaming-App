import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
  name: "searchCache",
  initialState: {},

  reducers: {
    addSuggestion: (state, action) => {
      state =  Object.assign(state, action.payload);
    },
  },
});
export default searchCacheSlice.reducer;
export const { addSuggestion } = searchCacheSlice.actions;
