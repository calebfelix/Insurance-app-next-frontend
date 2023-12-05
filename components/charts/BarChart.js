"use client";
import React from "react";
import { Chart as ChartJS, BarElement, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, ...registerables);

const BarChart = ({ agentData, customerData, employeeData }) => {
  // console.log(chartData);
  let data = {
    labels: ["Agent", "Customer", "Employee"],
    datasets: [
      {
        label: "# of Users",
        data: [agentData, customerData, employeeData],
        borderWidth: 1,
      },
    ],
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
      <Bar data={data} options={options} height={200} width={400} />
    </div>
  );
};

export default BarChart;
