"use client";

import { MessageError, MessageSuccess } from "@/error/Errors";
import { CreateNewState } from "@/services/state/createState";
import React, { useState } from "react";
// import ValidationError from '../../sharedcomponent/error/validationError'
// import { CreateNewState as CreateNewState } from '../../lib/state/CreateState'

const CreateState = ({ handelAllState }) => {
  const [stateName, setStateName] = useState("");
  const [status, setStatus] = useState("");
  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      if (stateName == "") {
        throw new Error("please enter state");
        return;
      }

      const response = await CreateNewState(stateName);
      console.log(response.data);
      handelAllState();
      MessageSuccess("State Added");
    } catch (error) {
      MessageError(error.message);
    }
  };

  const getstatename = (e) => {
    setStateName(e.target.value);
  };

  return (
    <>
      <div className="card mx-auto mt-1" style={{ width: "20rem" }}>
        <div className="my-form-container">
          <form className="my-main-form">
            <label className="my-form-label">Select a state</label>
            <select
              className="my-form-input"
              defaultValue={""}
              onChange={getstatename}
            >
              <option value="">--Select State--</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Delhi">Delhi</option>
              <option value="Puducherry">Puducherry</option>
            </select>
            <button className="my-form-submit-btn" onClick={handleCreate}>
              CreateState
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateState;
