"use client"
import React, { useEffect, useState } from "react";
import { MessageError } from "../../error/Errors";
import { getAllCustomer } from "@/services/customer/getAllCustomer";

const AllCustomerDropDown = ({ setCustomerId }) => {
  const [users, setUsers] = useState([]);
  const [myUser, setMyUser] = useState("");

  const Ulist = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.customerName}
      </option>
    );
  });

  const getListUsers = async () => {
    try {
      let response = await getAllCustomer({});
      console.log(response.data)
      setUsers((prev) => response.data);
    } catch (error) {
      MessageError("could not load data to dropdown");
    }
  };

  useEffect(() => {
    getListUsers();
  }, [myUser]);

  return (
    <>
      <select
        className="my-form-input"
        style={{ borderRadius: "5px" }}
        onChange={(e) => {
          setCustomerId(e.target.value);
        }}
      >
        <option value="">select</option>
        {Ulist}
      </select>
    </>
  );
};

export default AllCustomerDropDown;
