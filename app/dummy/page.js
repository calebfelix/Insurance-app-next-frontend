"use client";
import AllCustomerDropDown from "@/components/allCustomerDropDown/AllCustomerDropDown";
import AllPolicyDropDown from "@/components/allPolicyDropDown/AllPolicyDropDown";
import BarChart from "@/components/charts/BarChart";
import DoughnutChart from "@/components/charts/DoughnutChart";
import LineChart from "@/components/charts/LineChart";
import { getAllAgent } from "@/services/agent/getAllAgent";
import { getAllCustomer } from "@/services/customer/getAllCustomer";
import { getAllEmployee } from "@/services/employee/getAllEmployee";
import GoBackButton from "@/shared-components/GoBackButton";
import NavbarShared from "@/shared-components/Navbar";
import React, { useEffect, useState } from "react";

const page = () => {
  const [chartData, setChartData] = useState();
  const [agentData, setAgentData] = useState();
  const [agentDataActive, setAgentDataActive] = useState();
  const [employeeDataActive, setEmployeeDataActive] = useState();
  const [customerData, setCustomerData] = useState();
  const [employeeData, setEmployeeData] = useState();

  const loadAgentData = async () => {
    let res = await getAllAgent({});
    console.log(res.headers["x-total-count"]);
    setAgentData(res.headers["x-total-count"]);
  };
  const loadAgentDataActive = async () => {
    let res = await getAllAgent({ status: true });
    console.log(res.headers["x-total-count"]);
    setAgentDataActive(res.headers["x-total-count"]);
  };
  const loadCustomerData = async () => {
    let res = await getAllCustomer({});
    console.log(res.headers["x-total-count"]);
    setCustomerData(res.headers["x-total-count"]);
  };
  const loadEmployeeData = async () => {
    let res = await getAllEmployee({});
    console.log(res.headers["x-total-count"]);
    setEmployeeData(res.headers["x-total-count"]);
  };
  const loadEmployeeDataActive = async () => {
    let res = await getAllEmployee({ status: true });
    console.log(res.headers["x-total-count"]);
    setEmployeeDataActive(res.headers["x-total-count"]);
  };
  const loadElements = async () => {
    loadAgentData();
    loadAgentDataActive();
    loadCustomerData();
    loadEmployeeData();
    loadEmployeeDataActive();
  };
  useEffect(() => {
    loadElements();
  }, []);

  return (
    <>
    <NavbarShared/>
    <GoBackButton/>
      <div className="m-10 rounded">
        <label>All Users</label>
        <BarChart
          agentData={agentData}
          customerData={customerData}
          employeeData={employeeData}
        />
      </div>
      {/* <div className="m-10 rounded">
        <label>All Users</label>
        <LineChart/>
      </div> */}
      <div className="flex justify-between">
        <div className="m-10 rounded">
        <label>Agent</label>
          <DoughnutChart
            isAgent={true}
            agentData={agentData}
            agentDataActive={agentDataActive}
          />
        </div>
        <div className="m-10 rounded">
        <label>Employee</label>
          <DoughnutChart
            isEmployee={true}
            employeeData={employeeData}
            employeeDataActive={employeeDataActive}
          />
        </div>
        <div className="m-10 rounded">
        <label>Customer</label>
          <DoughnutChart isCustomer={true} customerData={customerData} />
        </div>
      </div>
    </>
  );
};

export default page;
