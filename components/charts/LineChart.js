"use client";
import React from "react";
import { Chart as ChartJS, LineElement, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, ...registerables);

const LineChart = () => {
  // console.log(chartData);
  const labels = ["jan","feb","mar","apr"]
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  let options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        ticks: {
          min: 0,
          max: 100,
        },
      },
    },
  };

  return (
    <div className="bg-white" style={{ width: "400px" }}>
      <Line data={data} options={options} height={200} width={400} />
    </div>
  );
};

export default LineChart;
