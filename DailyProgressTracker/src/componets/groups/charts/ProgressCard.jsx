import { useSelector } from "react-redux";
import TotalHourCard from "./TotalHourCard";
export default function ProgressCard() {
  const data = useSelector((state) => state.chartData.data);
  return (
    <div className="flex flex-wrap items-center justify-center p-9 bg-blue-100">
      <TotalHourCard />
      {data.map((task) => {
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
              <p className="text-2xl font-bold text-gray-900">
                {(task.minutes / 60).toFixed(2)} hr
              </p>
            </div>

            {/* Date & Description */}
            <div className="text-gray-700">
              <p className="text-sm font-medium">Date: {task.date}</p>
              <p className="text-sm mt-2">{task.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
