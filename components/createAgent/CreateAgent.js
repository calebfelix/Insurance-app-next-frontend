import { useEffect, useState } from "react";
import Spinner from "../../shared-components/Spinner/Spinner.js";
import { MessageError, MessageSuccess } from "../../error/Errors.js";
import { CreateNewPlan } from "@/services/plan/createPlan.js";
import { useParams } from "next/navigation.js";
import { CreateNewAgent } from "@/services/agent/createAgent.js";
import { isValidEmail } from "@/utils/Validator.js";

const CreateAgent = ({ handelAllAgent }) => {
  const { insuranceTypeId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [employeeId, setEmployeeId] = useState("");

  const [agentName, setAgentName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [agentAddress, setAgentAddress] = useState("");
  const [qualification, setQualification] = useState("");

  useEffect(() => {
    setEmployeeId(localStorage.getItem("id"));
  }, []);

  const handleCreateAgent = async (d) => {
    try {
      setIsLoading((prev) => true);
      // validation
      if (agentName == "") {
        throw new Error("invalid agentName");
      }
      if (username == "") {
        throw new Error("invalid username");
      }
      if (password == "") {
        throw new Error("invalid password");
      }
      if (email == "") {
        throw new Error("invalid email");
      }
      if (!isValidEmail(email)){
        throw new Error("invalid email type");
      }
      if (agentAddress == "") {
        throw new Error("invalid agentAddress");
      }
      if (qualification == "") {
        throw new Error("invalid qualification");
      }

      const response = await CreateNewAgent(
        employeeId,
        agentName,
        username,
        password,
        email,
        agentAddress,
        qualification
      );
      console.log(response.data);
      handelAllAgent();
      MessageSuccess("Created Agent");
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
                Create Agent
              </h5>
              <div>
                <label className="my-form-label">Agent Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setAgentName(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Username</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Password</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Email</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Agent Address</label>
                <input
                  type="text-area"
                  onChange={(e) => {
                    setAgentAddress(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Qualification</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setQualification(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <button
                type="button"
                className="my-form-submit-btn"
                onClick={handleCreateAgent}
              >
                Add Agent
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAgent;
