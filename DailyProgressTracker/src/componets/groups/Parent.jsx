import { useEffect, useState } from "react";
import Data from "./Data";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { setdata, setDays } from "../../../redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Parent() {
  // const [days, setDays] = useState(0);
  const navigate = useNavigate();
  const dispatchData = useDispatch();

  const days = useSelector((state) => state.chartData.days);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/get/${days}`)
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
        console.log(err);
      });
  }, [days]);

  const fetchDays = (days) => {
    dispatchData(setDays(days));
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
            <input className="bg-black rounded-lg px-3" type="date" />
          </li>
        </ul>
        <Toaster />
      </nav>
      <hr />
      <Data />
    </div>
  );
}
