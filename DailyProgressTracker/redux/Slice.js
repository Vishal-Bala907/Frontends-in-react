import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "chart-data", //^name of the slic

  initialState: {
    //^ inital states
    labels: [],
    dates: [],
    data: [{}],
    days: 0,
    date: "",
  },
  reducers: {
    //^ reducers methods
    setdata: (state, charObj) => {
      const data = charObj.payload.data;
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
    setDate: (state, date) => {
      state.date = date.payload;
    },
  },
});
//^ export reducer methods
export const { setdata, setDays, setDate } = Slice.actions;

//^ export slice
export default Slice.reducer;
