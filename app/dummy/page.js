"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import NavbarShared from "@/shared-components/Navbar";
import { getAllCustomer } from "@/services/customer/getAllCustomer";
import { getAllEmployee } from "@/services/employee/getAllEmployee";
import { getAllAgent } from "@/services/agent/getAllAgent";
import { data } from "autoprefixer";

export default function App() {
const [customerData, setCustomerData] = useState({});
const [employeeData, setEmployeeData] = useState({});
const [agentData, setAgentData] = useState({});

  const canvasEl1 = useRef(null);
  const canvasEl2 = useRef(null);

  const colors1 = ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"];
  const colors2 = ["#FF6384", "#36A2EB", "#FFCE56"];

  const getAllCustomers = async () => {
    try {
      let filters = {};
      // let response = await getAccounts(userId, filters);
      let response = await getAllCustomer(filters);
      setCustomerData(prev=>response.data)
      console.log(customerData);
    } catch (error) {
        console.log(error)
    }
  };

  const getAllEmployees = async () => {
    try {
      let filters = {};
      // let response = await getAccounts(userId, filters);
      let response = await getAllEmployee(filters);
      console.log(response);
      setEmployeeData(response.data)
    } catch (error) {
        console.log(error)
    }
  };

  const getAllAgents = async () => {
    try {
      let filters = {};
      // let response = await getAccounts(userId, filters);
      let response = await getAllAgent(filters);
      console.log(response);
      setAgentData(response.data)
    } catch (error) {
        console.log(error)
    }
  };

  

  useEffect(() => {
    getAllCustomers()
    getAllEmployees()
    getAllAgents()

    console.log(customerData)
    // Chart for Active vs Inactive Users
    const ctx1 = canvasEl1.current.getContext("2d");

    const data1 = {
      labels: ["Active Users", "Inactive Users"],
      datasets: [
        {
          data: [70, 30], // Adjust these values based on your actual data
          backgroundColor: colors1,
          hoverOffset: 4,
        },
      ],
    };

    const config1 = {
      type: "pie",
      data: data1,
    };

    const myPieChart1 = new Chart(ctx1, config1);

    // Chart for Policy Purchases
    const ctx2 = canvasEl2.current.getContext("2d");

    const data2 = {
      labels: ["Old Age Policy", "Child Policy", "Gold Policy"],
      datasets: [
        {
          data: [25, 40, 35], // Adjust these values based on your actual data
          backgroundColor: colors2,
          hoverOffset: 4,
        },
      ],
    };

    const config2 = {
      type: "pie",
      data: data2,
    };

    const myPieChart2 = new Chart(ctx2, config2);

    return function cleanup() {
      myPieChart1.destroy();
      myPieChart2.destroy();
    };
  }, []); // Empty dependency array to run only on mount

  return (
    <>
      <div>
        <NavbarShared />
      </div>
      <div className="App">
        <div className="flex">
          {/* Active vs Inactive Users */}
          <div className="w-1/2 h-96 border p-4">
            <span>Pie Chart - Active vs Inactive Users</span>
            <canvas
              id="myChart1"
              ref={canvasEl1}
              className="w-full h-full"
            ></canvas>
          </div>

          {/* Policy Purchases */}
          <div className="w-1/2 h-96 border p-4">
            <span>Pie Chart - Policy Purchases</span>
            <canvas
              id="myChart2"
              ref={canvasEl2}
              className="w-full h-full"
            ></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
