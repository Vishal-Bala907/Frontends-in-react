import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "chart-data", //^name of the slic

  initialState: {
    //^ inital states
    labels: [],
    dates: [],
    data: [{}],
    days: 0,
  },
  reducers: {
    //^ reducers methods
    setdata: (state, charObj) => {
      const data = charObj.payload.data;
      console.log(data);
      state.dates = [];
      state.labels = [];
      state.data = [];
      data.forEach((item) => {
        state.labels.push(item.title);
        state.dates.push(item.minutes);
        // console.log(item.time);
        // Saving data objects
        state.data.push(item);
      });
    },

    setDays: (state, days) => {
      state.days = days.payload;
    },
  },
});
//^ export reducer methods
export const { setdata, setDays } = Slice.actions;

//^ export slice
export default Slice.reducer;
