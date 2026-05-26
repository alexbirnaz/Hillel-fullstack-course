import { configureStore } from "@reduxjs/toolkit";
import loadsReducer from "../features/loads/model/loadsSlice";

export const store = configureStore({
  reducer: {
    loads: loadsReducer,
  },
});
