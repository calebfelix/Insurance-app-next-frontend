"use client";
import NavbarShared from "@/shared-components/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

const adminpage = () => {
  const router = useRouter();

  return (
    <>
      <NavbarShared />
      <div className="flex mt-5 justify-evenly">
        <button
          className="text-white mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={(e) => {
            router.push(`/allstate`);
          }}
        >
          manage State
        </button>
        <button
          className="text-white mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={(e) => {
            router.push(`/alltax`);
          }}
        >
          manage Tax
        </button>
        <button
          className="text-white mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={(e) => {
            router.push(`/allemployee`);
          }}
        >
          Employee
        </button>
        <button
          className="text-white mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={(e) => {
            router.push(`/allagent`);
          }}
        >
          Agent
        </button>
        <button
          className="text-white mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={(e) => {
            router.push(`/allinsurancetype`);
          }}
        >
          Insurance Type
        </button>
        <button
          className="text-white mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={(e) => {
            router.push(`/allcustomer`);
          }}
        >
          Customer
        </button>
        <button
          className="text-white mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={(e) => {
            router.push(`/allpolicy`);
          }}
        >
          Policy
        </button>
        <button
          className="text-white mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={console.log("Payment Detail")}
        >
          Payment Detail
        </button>
      </div>
      <hr className="mt-5"></hr>

    </>
  );
};

export default adminpage;
