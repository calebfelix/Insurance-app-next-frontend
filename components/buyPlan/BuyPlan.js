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
import { getAllPlans } from "@/services/plan/getAllPlan";
import CreatePlan from "../createPlan/CreatePlan";
import { UpdatePlan } from "../../services/plan/updatePlan";
import CreatePolicy from "../createPolicy/CreatePolicy";

const BuyPlan = ({ insuranceTypeId }) => {
  const router = useRouter();
  const [planId, setPlanId] = useState("");

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

  // modal states
  const [id, setId] = useState();
  const [policyTermMin, setPolicyTermMin] = useState();
  const [policyTermMax, setPolicyTermMax] = useState();
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  const [minInvestmentAmount, setMinInvestmentAmout] = useState();
  const [maxInvestmentAmount, setMaxInvestmentAmount] = useState();
  const [profitRatio, setProfitRatio] = useState();
  const [commissionAmount, setCommissionAmount] = useState();
  const [status, setStatus] = useState();

  const handleClose = () => {
    setShow((prev) => false);
  };
  const handleShow = () => {
    setShow((prev) => true);
  };

  const handlePurchase = (d) => {
    try {
      console.log(d);
      setId(d.id);
      // setPlanId(d.planId);
      setShow((prev) => true);
    } catch (error) {
      console.log(error);
      MessageError("could not handle update");
    }
  };

  const updateSend = async () => {
    try {
      let response = await UpdatePlan(
        insuranceTypeId,
        id,
        policyTermMin,
        policyTermMax,
        maxAge,
        minAge,
        maxInvestmentAmount,
        minInvestmentAmount,
        profitRatio,
        commissionAmount,
        status
      );
      console.log(response);

      if (response.data === "Plan Updated") {
        handleClose();
        handelAllPlans();
        MessageSuccess("employee Updated");
      }
    } catch (error) {
      console.log(error);
      MessageError(error.response.data.message);
    } finally {
      setIsLoading((prev) => false);
    }
  };

  const handelAllPlans = async (e) => {
    try {
      setIsLoading((prev) => true);
      let filters = {
        limit: limit,
        page: offset,
      };
      // let response = await getAccounts(userId, filters);
      const response = await getAllPlans(insuranceTypeId, filters);
      const response1 = await getAllPlans(insuranceTypeId, {});
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
      handelAllPlans();
    }
  }, [limit, offset, isVerifiedUser]);

  if (!isVerifiedUser) {
    return (
      <h1>
        <a href="/">please login</a>
      </h1>
    );
  }
  const ToCreate = () => {
    if (data.length == 0) {
      return (
        <h1 className="ml-10">
          This Insurance Does not have a plan Yet Contact Admin
        </h1>
      );
    }
  };

  return (
    <>
      <Spinner isLoading={isLoading} />
      <NavbarShared />
      <GoBackButton />
      <ToCreate />
      {/* <CreatePlan handelAllPlans={handelAllPlans} /> */}
      <Table
        rows={data}
        downloadRows={downloadData}
        setOffset={setOffset}
        setLimit={setLimit}
        isPurchaseButton={true}
        handlePurchase={handlePurchase}
        limit={limit}
        offset={offset}
        count={count}
      />
      {/* <div className="my-form-container m-5">
        <label className="my-form-label">policyTermMin: {data.policyTermMin}</label>
      </div> */}
      {/* update modal */}

      <div
        style={{ display: show ? "block" : "none" }}
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <CreatePolicy insuranceTypeId={insuranceTypeId} planId={id} setShow={setShow} />
      </div>
    </>
  );
};

export default BuyPlan;
