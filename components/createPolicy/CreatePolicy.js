'use client'
import { useEffect, useState } from "react";
import Spinner from "../../shared-components/Spinner/Spinner.js";
import { MessageError, MessageSuccess } from "../../error/Errors.js";
import { useParams } from "next/navigation.js";
import { Create } from "@/services/policy/createPolicy.js";

const CreatePolicy = ({ handelAllPolicy }) => {
  // const { insuranceTypeId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [insuranceType, setInsuranceType] = useState('')
  const [planName, setPlanName] = useState('')
  const [dateCreated, setDateCreated] = useState('')
  const [maturityDate, setMaturatyDate] = useState('')
  const [primimumType, setPrimimumType] = useState('')
  const [totalPremimumAmount, setTotalPremimumAmount] = useState('')
  const [profitRatio, setProfitRatio] = useState('')
  const [sumAssured, setSumAssured] = useState('')
  const [requestStatus, setRequestStatus] = useState('')
  const [customerId, setCustomerId] = useState('')
  const [agentId, setAgentId] = useState('')
  const [planId, setPlanId] = useState('')
  const [aadharMetadata, setAadharMetaData] = useState('')
  const [panMetadata, setPanMetaData] = useState('')

  const handleCreatePolicy = async (d) => {
    try {
      setIsLoading((prev) => true);
      // validation
      if (insuranceType == "") {
        throw new Error("invalid insurance type");
      }
      if (planName == "") {
        throw new Error("invalid plan name");
      }
      if (dateCreated == "") {
        throw new Error("invalid dateCreated");
      }
      if (maturityDate == "") {
        throw new Error("invalid maturity date");
      }
      if (primimumType == "") {
        throw new Error("invalid primimumType");
      }
      if (sumAssured < 0) {
        throw new Error("invalid sumAssured");
      }
      if (profitRatio < 0) {
        throw new Error("invalid profit ratio");
      }
      if (requestStatus == "") {
        throw new Error("invalid requestStatus");
      }
      if (totalPremimumAmount == "") {
        throw new Error("invalid total premimum amount");
      }
      if (customerId == "") {
        throw new Error("invalid customerId");
      }
      if (agentId == "") {
        throw new Error("invalid agentId");
      }
      if (planId == "") {
        throw new Error("invalid planId");
      }
      // if (aadharMetadata == "") {
      //   throw new Error("invalid customerId");
      // }
      const response = await Create(
        insuranceType, planName, dateCreated, maturityDate, primimumType, totalPremimumAmount, profitRatio, sumAssured, requestStatus, customerId, agentId, planId
      );
      console.log(response);
      handelAllPolicy();
      MessageSuccess("Created Added");
      return;
    } catch (error) {
      if (error.response) {
        MessageError(error.response.data.message);
      } else {
        MessageError(error.message);
      }
    } finally {
      setIsLoading((prev) => false);
    }
  };

  return (
    <>
      <Spinner isLoading={isLoading} />
      <div className="mx-auto w-[25%]">
        <div className="flex justify-center mt-10">
          <div className="my-form-container">
            <form className="my-main-form" action="#">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Create Policy
              </h5>
              <div>
                <label className="my-form-label">Insurance Type </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setInsuranceType(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Plan Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setPlanName(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Date Created</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setDateCreated(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">maturity Date</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setMaturatyDate(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">
                  Minimim Investment Amount
                </label>
                <input
                  type="number"
                  onChange={(e) => {
                    setMinInvestmentAmout(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">
                  Maximum Investment Amount
                </label>
                <input
                  type="number"
                  onChange={(e) => {
                    setMaxInvestmentAmount(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Premimum Type</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setPrimimumType(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Total Premimum Amount</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setTotalPremimumAmount(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">profit Ratio</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setProfitRatio(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Request Status</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setRequestStatus(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              {/* <div>
                <label className="my-form-label">
                  role
                </label>
                <select
                  className="my-form-input"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  <option value="">select</option>
                  <option value="admin">admin</option>
                  <option value="Employee">employee</option>
                </select>
              </div> */}
              <button
                type="button"
                className="my-form-submit-btn"
                onClick={handleCreatePolicy}
              >
                Add Policy
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePolicy;
