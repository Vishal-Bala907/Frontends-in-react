import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import colors from "../../../../helpers/Colors";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function ChartCurrentHrs() {
  const chartRef = useRef(null);
  let chartInstanceRef = useRef(null);

  Chart.register(ChartDataLabels); // Register the plugin

  const labels = useSelector((state) => state.chartData.labels);

  const dates = useSelector((state) => state.chartData.dates);
  console.log(dates);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); // Avoid creating multiple instances
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Minutes Worked",
            data: dates,
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: colors,
            datalabels: {
              anchor: "end",
              align: "end",
              formatter: (label) => label, // Display the value of the data point
              color: "black", // Text color
            },
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            color: "black", // Set the color of the text labels
            font: {
              weight: "bold",
              size: 12, // Font size of the labels
            },
          },
        },
        onClick: (e) => {
          const canvasPosition = getRelativePosition(
            e,
            chartInstanceRef.current
          );

          // Use the appropriate scale IDs (usually 'x' and 'y')
          const dataX = chartInstanceRef.current.scales["x"].getValueForPixel(
            canvasPosition.x
          );
          const dataY = chartInstanceRef.current.scales["y"].getValueForPixel(
            canvasPosition.y
          );

          console.log("X value: ", dataX);
          console.log("Y value: ", dataY);
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) chartInstanceRef.current.destroy(); // Cleanup on unmount
    };
  }, [dates, labels]);

  return (
    <canvas
      className="sm:max-h-[400px] lg:max-h-[650px] my-8"
      id="current-hr"
      ref={chartRef}
    ></canvas>
  );
}
