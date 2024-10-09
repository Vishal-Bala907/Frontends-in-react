import { useSelector } from "react-redux";

export default function TotalHourCard() {
  const data = useSelector((state) => state.chartData.data);
  const mins = data.reduce((acc, item) => {
    return acc + item.minutes;
  }, 0);
  let hr = String((mins / 60).toFixed(0)) + "." + String(mins % 60);
  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-green-400 border border-gray-200 p-6 m-4 rounded-3xl">
      {/* Title Section */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Total Works</h2>

      {/* Time Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-700 text-center">
          <p className="text-sm font-medium">Duration:</p>
          <p className="text-xl font-semibold">{mins} min</p>
        </div>
      </div>

      {/* Hours Section */}
      <div className="bg-green-100 text-center p-7 mb-4 rounded-2xl">
        <p className="text-lg font-semibold text-gray-700">Total Hours Spent</p>
        <p className="text-2xl font-bold text-gray-900">{hr} hr</p>
      </div>

      {/* Date & Description */}
      {/* <div className="text-gray-700">
        <p className="text-sm font-medium">Date: {task.date}</p>
        <p className="text-sm mt-2">{task.description}</p>
      </div> */}
    </div>
  );
}
