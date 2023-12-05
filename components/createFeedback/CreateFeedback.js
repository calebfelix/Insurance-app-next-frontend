"use client";
import { useEffect, useState } from "react";
import Spinner from "../../shared-components/Spinner/Spinner.js";
import { MessageError, MessageSuccess } from "../../error/Errors.js";
import { useParams } from "next/navigation.js";
import { CreateFeedbackCustomer } from "@/services/feedback/createFeedback.js";
import AllPolicyDropDown from "../allPolicyDropDown/AllPolicyDropDown.js";

const CreateFeedback = () => {
  const { insuranceTypeId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState();
  const [customerName, setCustomerName] = useState("");
  const [title, setTitle] = useState("");
  const [reply, useReply] = useState("");
  const [message, setMessage] = useState("");
  const [contactDate, setContactDate] = useState("");
  const [policyId, setPolicyId] = useState();
  const [customerId, setCustomerId] = useState();
  useEffect(() => {
    setCustomerId(localStorage.getItem("id"));
  }, []);

  const handleCreateFeedback = async (d) => {
    try {
      setIsLoading((prev) => true);
      // validation
      if (customerName == "") {
        throw new Error("invalid Customer Name");
      }
      if (title == "") {
        throw new Error("invalid title");
      }
      if (message == "") {
        throw new Error("Please Type Some Message");
      }
      // if (contactDate == "") {
      //   throw new Error("invalid date");
      // }
      if (policyId == "") {
        throw new Error("invalid policy Id");
      }

      const response = await CreateFeedbackCustomer(
        customerName,
        title,
        message,
        new Date(),
        policyId,
        localStorage.getItem("id")
      );
      console.log(response);
      MessageSuccess("Feedback sent");
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
                Create Feedback
              </h5>
              <div>
                <label className="my-form-label">Customer Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Title</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Message</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setMessage(e.target.value);
                    // setContactDate(new Date())
                  }}
                  className="my-form-input"
                ></input>
              </div>
              {/* <div>
                <label className="my-form-label">Contact Date</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setContactDate(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div> */}
              <div>
                <label className="my-form-label">Policy</label>
                {/* <input
                  type="text-area"
                  onChange={(e) => {
                    setPolicyId(e.target.value);
                  }}
                  className="my-form-input"
                ></input> */}
                <AllPolicyDropDown setPolicyId={setPolicyId} />
              </div>
              <button
                type="button"
                className="my-form-submit-btn"
                onClick={handleCreateFeedback}
              >
                Send Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateFeedback;
