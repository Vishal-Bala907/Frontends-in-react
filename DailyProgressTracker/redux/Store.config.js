import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice.js";

export default configureStore({
  reducer: {
    chartData: Slice,
  },
});
