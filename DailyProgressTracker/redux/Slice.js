import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "chart-data", //^name of the slic

  initialState: {
    //^ inital states
    labels: [],
    LABELS24: [],
    dates: [],
    DATES24: [],
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
      state.LABELS24 = [];
      state.DATES24 = [];
      const data = charObj.payload.data;
      let time = 0;
      let hr;
      data.forEach((item) => {
        state.labels.push(item.title);

        hr =
          String(Math.floor(item.minutes / 60)) +
          "." +
          String(item.minutes % 60);

        state.dates.push(hr);
        state.data.push(item);
        time += item.minutes;
      });
      time = 24 * 60 - time;
      time = String(Math.floor(time / 60)) + "." + String(time % 60);

      state.LABELS24 = [...state.labels, " NOTHING"];
      state.DATES24 = [...state.dates, time];
    },
    setMultipleDaysData: (state, chartObj) => {
      state.dates = [];
      state.labels = [];
      state.data = [];
      state.LABELS24 = [];
      state.DATES24 = [];
      let grandTime = 0;
      // console.log(chartObj.payload.data);
      let keys = Object.keys(chartObj.payload.data);
      // console.log(keys);
      keys.forEach((key) => {
        let arr = chartObj.payload.data[key];
        let timeSpent = arr.reduce((acc, t) => {
          return acc + t.minutes;
        }, 0);

        state.labels.push(key);
        state.LABELS24.push(key);

        let time =
          String((timeSpent / 60).toFixed(0)) + "." + String(timeSpent % 60);
        grandTime += timeSpent;

        state.dates.push(time);
        state.DATES24.push(time);

        arr.forEach((item) => {
          state.data.push(item);
        });
      });
      grandTime = state.days * 24 * 60 - grandTime;
      let GRANTTIMETOTAL =
        String(Math.floor(grandTime / 60)) + "." + String(grandTime % 60);
      state.LABELS24.push(" NOTHING");
      state.DATES24.push(GRANTTIMETOTAL);
    },

    setDays: (state, days) => {
      state.days = days.payload;
      // alert(state.days);

      // state.longDates = false;
      // state.dates = false;
    },
    setDate: (state, date) => {
      state.date = date.payload;
      // state.longDates = false;
      // state.days = false;
    },
    setLongDays: (state, date) => {
      // state.longDates = 0;
      state.longDates = date.payload;
      // state.days = false;
      // state.dates = false;
    },
  },
});
//^ export reducer methods
export const { setdata, setDays, setDate, setMultipleDaysData, setLongDays } =
  Slice.actions;

//^ export slice
export default Slice.reducer;
