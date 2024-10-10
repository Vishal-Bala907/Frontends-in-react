import { useSelector } from "react-redux";
import TotalHourCard from "./TotalHourCard";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export default function ProgressCard() {
  const data = useSelector((state) => state.chartData.data);
  // const [item, setItemToDelete] = useState("");

  const setItemToDelete = (item) => {
    axios
      .delete(`http://localhost:8080/delete/${item.id}`)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Deleted ... ", {
            position: "top-right",
          });
        }
        location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function deleteTask(task) {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => setItemToDelete(task),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  }

  return (
    <div className="flex flex-wrap items-center justify-center p-9 bg-blue-100">
      <TotalHourCard />
      {data.map((task) => {
        let hr;

        if (task.minutes < 60) {
          hr = task.minutes + " minutes";
        } else {
          hr =
            String(Math.floor(task.minutes / 60)) +
            "." +
            String(task.minutes % 60) +
            " hours";
        }

        return (
          <div
            key={task.id}
            className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-200 p-6 m-4"
          >
            {/* Title Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {task.title}
            </h2>

            {/* Time Section */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-gray-700">
                <p className="text-sm font-medium">
                  Start Time: {task.startTime}
                </p>
                <p className="text-sm font-medium">End Time: {task.endTime}</p>
              </div>
              <div className="text-gray-700 text-center">
                <p className="text-sm font-medium">Duration:</p>
                <p className="text-xl font-semibold">{task.minutes} min</p>
              </div>
            </div>

            {/* Hours Section */}
            <div className="bg-gray-100 text-center py-2 mb-4 rounded-2xl">
              <p className="text-lg font-semibold text-gray-700">Hours Spent</p>
              <p className="text-2xl font-bold text-gray-900">{hr}</p>
            </div>

            {/* Date & Description */}
            <div className="text-gray-700">
              <p className="text-sm font-medium">Date: {task.date}</p>
              <p className="text-sm mt-2">{task.description}</p>
            </div>

            <div className="px-3 py-2 bg-red-300 w-fit rounded-lg mt-3 hover:bg-red-500 hover:cursor-pointer hover:text-white">
              <button
                onClick={() => {
                  deleteTask(task);
                }}
              >
                Delete
              </button>
              <Toaster />
            </div>
          </div>
        );
      })}
    </div>
  );
}
