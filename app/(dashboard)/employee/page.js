"use client";
import EmployeeProfile from "@/components/profilePage/EmployeeProfile";
import NavbarShared from "@/shared-components/Navbar";
import Spinner from "@/shared-components/Spinner/Spinner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const adminpage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [localStorageId, setLocalStorageId] = useState();
  useEffect(() => {
    setLocalStorageId(localStorage.getItem("id"));
  }, []);

  return (
    <>
      <Spinner isLoading={isLoading} />
      <NavbarShared />
      <div className="flex">
        <EmployeeProfile empId={localStorageId} />
        <div className="flex flex-col w-[20%] justify-evenly dark:bg-gray-800 m-5 rounded">
          <button
            className="text-white m-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={(e) => {
              setIsLoading((prev) => true);
              router.push(`/allagent`);
            }}
          >
            Agent
          </button>

          <button
            className="text-white m-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={(e) => {
              setIsLoading((prev) => true);
              router.push(`/editcustomer`);
            }}
          >
            Customer
          </button>
          <button
            className="text-white m-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={(e) => {
              setIsLoading((prev) => true);
              router.push(`/allfeedback`);
            }}
          >
            Customer Feedback
          </button>
        </div>
      </div>
    </>
  );
};

export default adminpage;
