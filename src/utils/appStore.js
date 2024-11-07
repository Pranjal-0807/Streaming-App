import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchCacheSlice from "./searchCacheSlice";

const appStore = configureStore({
  reducer: {
    menu: appSlice,
    chat: chatSlice,
    cache: searchCacheSlice,
  },
});

export default appStore;
