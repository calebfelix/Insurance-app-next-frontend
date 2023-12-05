import React, { useEffect, useState } from "react";
import { MessageError } from "../../error/Errors";
import { getAllInsuranceType } from "@/services/insurance/getAllInsuranceType";

const TransferDropdown = ({ setInsuranceType }) => {
  const [users, setUsers] = useState([]);
  const [myUser, setMyUser] = useState("");

  const Ulist = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.insuranceName}
      </option>
    );
  });

  const getListUsers = async () => {
    try {
      let response = await getAllInsuranceType({});
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
          setInsuranceType(e.target.value);
        }}
      >
        <option value="">select</option>
        {Ulist}
      </select>
    </>
  );
};

export default TransferDropdown;
