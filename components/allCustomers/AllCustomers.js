"use client";
import React, { useEffect, useState } from "react";
import NavbarShared from "../../shared-components/Navbar";
import Table from "../../shared-components/Table";
import { verify } from "../../services/user/authorization";
import Spinner from "../../shared-components/Spinner/Spinner.js";
import { MessageError, MessageSuccess } from "../../error/Errors";

import { useRouter } from "next/navigation";
import { getAllEmployee } from "@/services/employee/getAllEmployee";
import CreateEmployee from "../createEmployee/CreateEmployee";
import { getAllInsuranceType } from "@/services/insurance/getAllInsuranceType";
import { getAllState } from "@/services/state/getAllState";
import { getAllAgent } from "@/services/agent/getAllAgent";
import GoBackButton from "@/shared-components/GoBackButton";
import { getAllCustomer } from "@/services/customer/getAllCustomer";
import CreateCustomer from "../createCustomer/CreateCustomer";

const AllCustomers = () => {  
  const router = useRouter();
  const [netWorth, setNetWorth] = useState(0);
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [noOfPages, setNoOfPages] = useState(1);
  const [offset, setOffset] = useState(1);
  const [isVerifiedUser, setIsVerifiedUser] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
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
  const [id, setId] = useState("");
  const [book, setBook] = useState({});

  // userId set
  const [userId, setUserId] = useState("") 

  // search filters
  const [searchBankName, setSearchBankName] = useState("");

  const handleClose = () => {
    setShow((prev) => false);
  };
  const handleShow = () => {
    setShow((prev) => true);
  };


  const handelAllCustomers = async (e) => {
    try {
      setIsLoading((prev) => true);
      let filters = {
        limit: limit,
        page: offset,
      };
      // let response = await getAccounts(userId, filters);
      let response = await getAllCustomer(filters)
      console.log(response)
      setCount((prev) => response?.headers["x-total-count"]);
      let noOfPages = Math.ceil(response?.headers["x-total-count"] / limit);
      setNoOfPages(noOfPages);
      setData((prev) => response.data);
      return;
    } catch (error) {
      console.log(error)
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
      handelAllCustomers();
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
      <GoBackButton/>
      <CreateCustomer handelAllCustomers={handelAllCustomers}/>
      <Table
        rows={data}
        setOffset={setOffset}
        setLimit={setLimit}
        limit={limit}
        offset={offset}
        count={count}
      />

    </>
  );
};

export default AllCustomers;
