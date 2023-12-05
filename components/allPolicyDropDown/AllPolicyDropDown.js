"use client"
import React, { useEffect, useState } from "react";
import { MessageError } from "../../error/Errors";
import { getAllPolicy } from "@/services/policy/getAllPolicy";

const AllPolicyDropDown = ({ setPolicyId }) => {
  const [users, setUsers] = useState([]);
  const [myUser, setMyUser] = useState("");

  const Ulist = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.planName}
      </option>
    );
  });

  const getListUsers = async () => {
    try {
      let response = await getAllPolicy({customer_id:localStorage.getItem("id")});
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
          setPolicyId(e.target.value);
        }}
      >
        <option value="">select</option>
        {Ulist}
      </select>
    </>
  );
};

export default AllPolicyDropDown;
