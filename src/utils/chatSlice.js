import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
  },

  reducers: {
    addChat: (state, action) => {
      state.chats.splice(10, 1);

      state.chats.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;

export const { addChat } = chatSlice.actions;
