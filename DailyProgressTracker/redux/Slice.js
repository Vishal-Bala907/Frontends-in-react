import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "chart-data", //^name of the slic

  initialState: {
    //^ inital states
    labels: [],
    dates: [],
    data: [{}],
    days: 0,
    longDates: 0,
    date: "",
  },
  reducers: {
    //^ reducers methods

    setdata: (state, charObj) => {
      state.dates = [];
      state.labels = [];
      state.data = [];
      const data = charObj.payload.data;

      data.forEach((item) => {
        state.labels.push(item.title);
        state.dates.push(item.minutes);
        state.data.push(item);
      });
    },
    setMultipleDaysData: (state, chartObj) => {
      state.dates = [];
      state.labels = [];
      state.data = [];
      // console.log(chartObj.payload.data);
      let keys = Object.keys(chartObj.payload.data);
      // console.log(keys);
      keys.forEach((key) => {
        let arr = chartObj.payload.data[key];
        let timeSpent = arr.reduce((acc, t) => {
          return acc + t.minutes;
        }, 0);

        state.labels.push(key);

        let time =
          String((timeSpent / 60).toFixed(0)) + "." + String(timeSpent % 60);

        state.dates.push(time);

        arr.forEach((item) => {
          state.data.push(item);
        });
      });
    },

    setDays: (state, days) => {
      state.days = days.payload;
      state.longDates = false;
      state.dates = false;
    },
    setDate: (state, date) => {
      state.date = date.payload;
      state.longDates = false;
      state.days = false;
    },
    setLongDays: (state, date) => {
      // state.longDates = 0;
      state.longDates = date.payload;
      state.days = false;
      state.dates = false;
    },
  },
});
//^ export reducer methods
export const { setdata, setDays, setDate, setMultipleDaysData, setLongDays } =
  Slice.actions;

//^ export slice
export default Slice.reducer;
