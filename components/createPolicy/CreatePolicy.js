"use client";
import { useEffect, useState } from "react";
import Spinner from "../../shared-components/Spinner/Spinner.js";
import { MessageError, MessageSuccess } from "../../error/Errors.js";
import { useParams, useRouter } from "next/navigation.js";
import { Create } from "@/services/policy/createPolicy.js";

const CreatePolicy = ({ insuranceTypeId, planId, handelAllPolicy, setShow }) => {
  // const { planId } = useParams();
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  // const [insuranceType, setInsuranceType] = useState("");
  // const [planId, setPlanId] = useState("");
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [typeofpremimum, setTypeofpremimum] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCreatePolicy = async (d) => {
    try {
      setIsLoading((prev) => true);
      // validation
      // if (insuranceType == "") {
      //   throw new Error("invalid insurance type");
      // }
      if (amount == "") {
        throw new Error("invalid amount");
      }
      if (years == "") {
        throw new Error("invalid years");
      }
      if (typeofpremimum == "") {
        throw new Error("invalid typeofpremimum");
      }
      if (paymentMethod == "") {
        throw new Error("invalid paymentMethod");
      }
      console.log(planId)
      const response = await Create(
        amount,
        years,
        typeofpremimum,
        paymentMethod,
        insuranceTypeId,
        planId
        );
      console.log(response);
      // handelAllPolicy();
      setShow((prev) => !prev);
      MessageSuccess("Created Added");
      router.push(`/customer`)
      return;
    } catch (error) {
      console.log(error)
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
                Buy Policy
              </h5>
              <div>
                <label className="my-form-label">Amount</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setAmount(Number(e.target.value));
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">No of Years</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setYears(Number(e.target.value));
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Type of Premimum</label>
                <select
                  className="my-form-input"
                  onChange={(e) => {
                    setTypeofpremimum(e.target.value);
                  }}
                >
                  <option value="">select</option>
                  <option value="monthly">monthly</option>
                  <option value="half-yearly">half-yearly</option>
                  <option value="quaterly">quaterly</option>
                  <option value="yearly">yearly</option>
                </select>
              </div>
              <div>
                <label className="my-form-label">Payment Method</label>
                <select
                  className="my-form-input"
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                  }}
                >
                  <option value="">select</option>
                  <option value="UPI">UPI</option>
                  <option value="Credit-Card">Credit Card</option>
                  <option value="debit-Card">debit Card</option>
                  <option value="Net-Banking">Net-Banking</option>
                </select>
              </div>

              <button
                type="button"
                className="my-form-submit-btn"
                onClick={handleCreatePolicy}
              >
                Buy Policy
              </button>
              <button
                onClick={(e) => {
                  setShow((prev) => !prev);
                }}
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePolicy;
