import { useEffect, useState } from "react";
import Data from "./Data";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { setdata, setDays, setDate } from "../../../redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Parent() {
  // const [days, setDays] = useState(0);
  const navigate = useNavigate();
  const dispatchData = useDispatch();
  const [url, setUrl] = useState("http://localhost:8080/get/0");

  const days = useSelector((state) => state.chartData.days);
  const date = useSelector((state) => state.chartData.date);

  useEffect(() => {
    axios
      .get(url)
      .then(function (res) {
        if (res.status === 200) {
          toast.success("Data found", {
            position: "top-left",
          });
          const { data } = res;
          dispatchData(setdata({ data }));
        }
      })
      .catch(function (err) {
        if (err.status == 404) {
          toast.error(`Data not found... ${date} 😞🥲🥲`, {
            position: "top-center",
          });
        }
      });
  }, [days, date]);

  //? Getting data by number of days
  const fetchDays = (days) => {
    setUrl(`http://localhost:8080/get/${days}`);
    dispatchData(setDays(days));
  };

  //? Getting data by date
  const fetchByDate = (date) => {
    setUrl(`http://localhost:8080/get/by-date/${date}`);
    dispatchData(setDate(date));
  };

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
