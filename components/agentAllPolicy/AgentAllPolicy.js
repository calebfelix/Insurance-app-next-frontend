"use client";
import React, { useEffect, useState } from "react";
import NavbarShared from "../../shared-components/Navbar";
import Table from "../../shared-components/Table";
import { verify } from "../../services/user/authorization";
import Spinner from "../../shared-components/Spinner/Spinner.js";
import { MessageError, MessageSuccess } from "../../error/Errors";

import { useRouter } from "next/navigation";
import CreateEmployee from "../createEmployee/CreateEmployee";
import { getAllPolicy } from "@/services/policy/getAllPolicy";
import GoBackButton from "@/shared-components/GoBackButton";
import CreatePolicy from "../createPolicy/CreatePolicy";
import { UpdatePolicy } from "@/services/policy/updatePolicy";

const AgentAllPolicy = () => {
  const router = useRouter();
  const [netWorth, setNetWorth] = useState(0);
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [noOfPages, setNoOfPages] = useState(1);
  const [offset, setOffset] = useState(1);
  const [isVerifiedUser, setIsVerifiedUser] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadData, setDownloadData] = useState([]);

  // modals
  const [show, setShow] = useState(false);
  const [showDeposite, setShowDeposite] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  // amounts
  const [depositeAmount, setDepositeAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [transferToAccount, setTransferToAccount] = useState("");

  // modal states
  const [id, setId] = useState();

  //policies
  const [insuranceType, setInsuranceType] = useState("");
  const [planName, setPlanName] = useState("");
  const [dateCreated, setDateCreated] = useState("");
  const [maturityDate, setMaturatyDate] = useState("");
  const [primimumType, setPrimimumType] = useState("");
  const [totalPremimumAmount, setTotalPremimumAmount] = useState("");
  const [profitRatio, setProfitRatio] = useState("");
  const [sumAssured, setSumAssured] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [planId, setPlanId] = useState("");
  const [agentId, setAgentId] = useState("");
  const [aadharMetadata, setAadharMetaData] = useState("");
  const [panMetadata, setPanMetaData] = useState("");

  // search filters
  const [searchBankName, setSearchBankName] = useState("");

// useEffect(() => {

// }, [])


  const handleClose = () => {
    setShow((prev) => false);
  };
  const handleShow = () => {
    setShow((prev) => true);
  };

  const handelAllPolicies = async (e) => {
    try {
      setIsLoading((prev) => true);
      setAgentId(localStorage.getItem("id"))
      let filters = {
        limit: limit,
        page: offset,
        agent_id: localStorage.getItem("id"),
      };
      // let response = await getAccounts(userId, filters);
      let response = await getAllPolicy(filters);
      let response1 = await getAllPolicy({agent_id: localStorage.getItem("id")});
      console.log(response);
      setCount((prev) => response?.headers["x-total-count"]);
      let noOfPages = Math.ceil(response?.headers["x-total-count"] / limit);
      setNoOfPages(noOfPages);
      setData((prev) => response.data);
      setDownloadData((prev) => response1.data);
      return;
    } catch (error) {
      console.log(error);
      MessageError(error.response.data.message);
    } finally {
      setIsLoading((prev) => false);
    }
  };

  const handleUpdate = async (d) => {
    console.log("handleuopdate");
    setInsuranceType(d.insuranceType);
    setPlanName(d.planName);
    setId(d.id);
    setPrimimumType(d.primimumType);
    setRequestStatus(d.requestStatus);
    setTotalPremimumAmount(d.totalPremimumAmount);
    setProfitRatio(d.profitRatio);
    setSumAssured(d.sumAssured);
    setShow((prev) => true);
  };

  const updateSend = async () => {
    try {
      await UpdatePolicy(
        insuranceType,
        planName,
        primimumType,
        totalPremimumAmount,
        profitRatio,
        sumAssured,
        requestStatus,
        customerId,
        agentId,
        planId,
        id
      );
      console.log(res);

      // if (res.data === "state updated sucessfully") {
      handleClose();
      handelAllInsurance();
      MessageSuccess("Ploicy updated Updated");
      // }
    } catch (error) {
      MessageError(error.message);
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

  // useEffect(() => {
  //   verifyUser();
  // }, []);

  useEffect(() => {
    if (isVerifiedUser) {
      handelAllPolicies();
    }
  }, [limit, offset, isVerifiedUser]);

  if (!isVerifiedUser) {
    return (
      <h1>
        <a href="/">please login</a>
      </h1>
    );
  }

  return (
    <>
      <Spinner isLoading={isLoading} />
      <NavbarShared />
      <GoBackButton />
      {/* <CreateEmployee handelAllPolicies={handelAllPolicies} /> */}
      {/* <CreatePolicy /> */}
      <Table
        rows={data}
        downloadRows={downloadData}
        setOffset={setOffset}
        setLimit={setLimit}
        limit={limit}
        offset={offset}
        count={count}
        isUpdateButton={true}
        handleUpdate={handleUpdate}
      />

      <div
        style={{ display: show ? "block" : "none" }}
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative top-[25%] translate-x-[-50%] left-[50%] w-full max-w-[30rem] max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Update
              </h3>
              <button
                type="button"
                onClick={(e) => {
                  setShow((prev) => !prev);
                }}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="w-[100%] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-4 dark:bg-gray-700 dark:border-gray-700">
              <form className="space-y-6">
                <div>
                  <label className="my-form-label">insurance Type</label>
                  <input
                    className="my-form-input"
                    value={insuranceType}
                    onChange={(e) => {
                      setInsuranceType((prev) => e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <label className="my-form-label">plan Name</label>
                  <input
                    className="my-form-input"
                    value={planName}
                    onChange={(e) => {
                      setPlanName((prev) => e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <label className="my-form-label">primimumType</label>
                  <input
                    className="my-form-input"
                    value={primimumType}
                    onChange={(e) => {
                      setPrimimumType((prev) => e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <label className="my-form-label">Total Premimum Amount</label>
                  <input
                    className="my-form-input"
                    value={totalPremimumAmount}
                    onChange={(e) => {
                      setTotalPremimumAmount((prev) => e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <label className="my-form-label">Profit Ratio</label>
                  <input
                    className="my-form-input"
                    value={profitRatio}
                    onChange={(e) => {
                      setProfitRatio((prev) => e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <label className="my-form-label">Sum Assured</label>
                  <input
                    className="my-form-input"
                    value={sumAssured}
                    onChange={(e) => {
                      setSumAssured((prev) => e.target.value);
                    }}
                  ></input>
                </div>
              </form>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={(e) => {
                  setShow((prev) => !prev);
                }}
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Close
              </button>
              <button
                onClick={updateSend}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentAllPolicy;
