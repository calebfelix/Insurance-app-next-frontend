import React, { useEffect, useState } from "react";
import { MessageError } from "../../error/Errors";
import { getAllInsuranceType } from "@/services/insurance/getAllInsuranceType";
import { getAllAgent } from "@/services/agent/getAllAgent";

const AllAgentDropDown = ({ setAgentId }) => {
  const [users, setUsers] = useState([]);
  const [myUser, setMyUser] = useState("");

  const Ulist = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.agentName}
      </option>
    );
  });

  const getListUsers = async () => {
    try {
      let response = await getAllAgent({});
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
          setAgentId(e.target.value);
        }}
      >
        <option value="">select</option>
        {Ulist}
      </select>
    </>
  );
};

export default AllAgentDropDown;
