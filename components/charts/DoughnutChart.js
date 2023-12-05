"use client";
import React from "react";
import { Chart as ChartJS, registerables, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, ...registerables);

const DoughnutChart = ({
  isAgent,
  isEmployee,
  isCustomer,
  agentData,
  agentDataActive,
  employeeData,
  employeeDataActive,
  customerData

}) => {
  let data = {};
  if (isAgent) {
    data = {
      labels: ["inActive", "Active"],
      datasets: [
        {
          label: "Active Agents",
          data: [agentData - agentDataActive, agentDataActive],
          borderWidth: 1,
        },
      ],
    };
  } else if (isEmployee) {
    data = {
      labels: ["inActive", "Active"],
      datasets: [
        {
          label: "Active Employees",
          data: [employeeData - employeeDataActive, employeeDataActive],
          borderWidth: 1,
        },
      ],
    };
  }else if (isCustomer) {
    data = {
      labels: ["inActive", "Active"],
      datasets: [
        {
          label: "Active Customers",
          data: [0, customerData],
          borderWidth: 1,
        },
      ],
    };
  }

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
      <Doughnut data={data} options={options} height={200} width={400} />
    </div>
  );
};

export default DoughnutChart;
