import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import colors from "../../../../helpers/Colors";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function ChartCurrentHrs() {
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  let chartInstanceRef = useRef(null);
  let chartInstanceRef2 = useRef(null);

  Chart.register(ChartDataLabels); // Register the plugin

  const labels = useSelector((state) => state.chartData.labels);
  const LABELS24 = useSelector((state) => state.chartData.LABELS24);

  const dates = useSelector((state) => state.chartData.dates);
  const DATES24 = useSelector((state) => state.chartData.DATES24);

  // const longDates = useSelector((state) => state.chartData.longDates);
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
            label: "Hours worked",
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

  // 24 hour based chart
  console.log(LABELS24);
  console.log(DATES24);
  useEffect(() => {
    const ctx = chartRef2.current.getContext("2d");

    if (chartInstanceRef2.current) {
      chartInstanceRef2.current.destroy(); // Avoid creating multiple instances
    }

    chartInstanceRef2.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: LABELS24,
        datasets: [
          {
            label: "Hours worked",
            data: DATES24,
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
          const dataX = chartInstanceRef2.current.scales["x"].getValueForPixel(
            canvasPosition.x
          );
          const dataY = chartInstanceRef2.current.scales["y"].getValueForPixel(
            canvasPosition.y
          );

          console.log("X value: ", dataX);
          console.log("Y value: ", dataY);
        },
      },
    });

    return () => {
      if (chartInstanceRef2.current) chartInstanceRef2.current.destroy(); // Cleanup on unmount
    };
  }, [LABELS24, DATES24]);

  return (
    <div className="flex flex-wrap justify-center items-center my-3">
      <canvas
        className="sm:max-h-[400px] lg:max-h-[400px] my-12 lg:max-w-[50%] "
        id="current-hr"
        ref={chartRef}
      ></canvas>
      <canvas
        className="sm:max-h-[400px] lg:max-h-[400px] my-12 lg:max-w-[50%] "
        id="current-hr"
        ref={chartRef2}
      ></canvas>
    </div>
  );
}
