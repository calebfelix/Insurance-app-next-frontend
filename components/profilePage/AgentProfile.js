"use client";
import React, { useEffect, useState } from "react";

import { verify } from "../../services/user/authorization";

import { MessageError, MessageSuccess } from "../../error/Errors";
import { useParams, useRouter } from "next/navigation";
import { getEmployeeById } from "@/services/employee/getEmployeebyId";
import { getCustomerById } from "@/services/customer/getCustomerbyId";
import { getAgentbyId } from "@/services/agent/getAgentbyId";

const AgentProfile = ({ agentId }) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isVerifiedUser, setIsVerifiedUser] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handelAllEmployees = async (e) => {
    try {
      setIsLoading((prev) => true);
      let filters = {};
      let response = await getAgentbyId(localStorage.getItem("id"), filters);
      console.log(response.data);
      setData((prev) => response.data);
      return;
    } catch (error) {
      console.log(error);
      MessageError(error.response.data.message);
    } finally {
      setIsLoading((prev) => false);
    }
  };

  const verifyUser = async () => {
    try {
      let response = await verify();
      setIsVerifiedUser((prev) => response.data.result);
      return;
    } catch (error) {
      MessageError(error.response.data.message);
    }
  };

  useEffect(() => {
    if (isVerifiedUser) {
      handelAllEmployees();
    }
  }, [isVerifiedUser]);

  if (!isVerifiedUser) {
    return (
      <h1>
        <a href="/">please login</a>
      </h1>
    );
  }

  return (
    <>
      <div className="mx-auto w-[50%]">
        <div className="flex justify-center mt-10">
          <div className="w-full max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-7">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Agent Profile
              </h2>
              <div className="flex justify-between">
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Agent Name:
                    </label>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {data.agentName}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Username:
                    </label>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {data.username}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Address:
                    </label>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {data.agentAddress}
                    </p>
                  </div>
                  
                  
                  
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Email:
                    </label>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {data.email}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Role:
                    </label>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {data.role}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Status:
                    </label>
                    <p
                      className={`text-base ${
                        data.status ? "text-green-600" : "text-red-600"
                      } dark:text-gray-300`}
                    >
                      {data.status ? "Active" : "Inactive"}
                    </p>
                  </div>
                  
                </div>
                <div>
                  <img
                    className="rounded mr-10"
                    src={data.agentImgUrl}
                    width={200}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentProfile;
