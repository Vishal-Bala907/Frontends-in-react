import { useEffect } from "react";
import Data from "./Data";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { setdata, setDays, setMultipleDaysData } from "../../../redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Parent() {
  // const [days, setDays] = useState(0);
  const navigate = useNavigate();
  const dispatchData = useDispatch();
  // const [url, setUrl] = useState("http://localhost:8080/get/0");

  const days = useSelector((state) => state.chartData.days);
  // alert(days);
  // const longDates = useSelector((state) => state.chartData.longDates);
  // const date = useSelector((state) => state.chartData.date);

  useEffect(() => {
    async function getData() {
      try {
        let response;
        if (days == 0 || days == 1) {
          response = await axios.get(`http://localhost:8080/get/${days}`);
        } else if (days == 7 || days == 30) {
          response = await axios.get(`http://localhost:8080/get/days/${days}`);
        } else {
          response = await axios.get(
            `http://localhost:8080/get/by-date/${days}`
          );
        }

        if (response.status === 200) {
          toast.success("Data found", { position: "top-left" });

          if (days == 0 || days == 1) {
            dispatchData(setdata({ data: response.data }));
          } else if (days == 7 || days == 30) {
            const { data } = response;
            dispatchData(setMultipleDaysData({ data }));
          } else {
            dispatchData(setdata({ data: response.data }));
          }

          // dispatchData(setMultipleDaysData({ data: response.data }));
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          toast.error(`Data not found... 😞🥲🥲`, {
            position: "top-center",
          });
        }
      }
    }

    getData(days);

    //   axios
    //     .get(url)
    //     .then(function (res) {
    //       if (res.status === 200) {
    //         toast.success("Data found", {
    //           position: "top-left",
    //         });
    //         const { data } = res;
    //         dispatchData(setdata({ data }));
    //       }
    //     })
    //     .catch(function (err) {
    //       if (err.status == 404) {
    //         toast.error(`Data not found... ${date} 😞🥲🥲`, {
    //           position: "top-center",
    //         });
    //       }
    //     });
    // }, [days, date]
  }, [days]);

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then(function (res) {
  //       if (res.status === 200) {
  //         toast.success("Data found", {
  //           position: "top-left",
  //         });
  //         const { data } = res;
  //         dispatchData(setMultipleDaysData({ data }));
  //       }
  //     })
  //     .catch(function (err) {
  //       if (err.status == 404) {
  //         toast.error(`Data not found... ${date} 😞🥲🥲`, {
  //           position: "top-center",
  //         });
  //       }
  //     });
  // }, [longDates]);

  //? Getting data by number of days
  const fetchDays = (days) => {
    // setUrl(`http://localhost:8080/get/${days}`);
    dispatchData(setDays(days));
  };

  // //? Getting data by date
  const fetchByDate = (date) => {
    // setUrl(`http://localhost:8080/get/by-date/${date}`);
    dispatchData(setDays(date));
  };

  // //? fetch multipleData
  // const fetchMultiDaysData = (days) => {
  //   // setUrl(`http://localhost:8080/get/days/${days}`);
  //   dispatchData(setDays(days));
  // };

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-blue-800 text-cyan-50">
        <ul className="cursor-pointer flex justify-center items-center gap-6 py-3 over truncate">
          <li onClick={() => gotoHome()}>Home</li>
          <li onClick={() => fetchDays(0)}>Today</li>
          <li onClick={() => fetchDays(1)}>Previous Day</li>
          <li onClick={() => fetchDays(7)}>Last 7 days</li>
          <li onClick={() => fetchDays(30)}>Last 30 Days</li>
          <li>
            <input
              className="bg-black rounded-lg px-3"
              type="date"
              onChange={(e) => {
                fetchByDate(e.target.value);
              }}
            />
          </li>
        </ul>
        <Toaster />
      </nav>
      <hr />
      <Data />
    </div>
  );
}
