import { useEffect, useState } from "react";
import Spinner from "../../shared-components/Spinner/Spinner.js";
import { MessageError, MessageSuccess } from "../../error/Errors.js";
import { CreateNewEmployee } from "@/services/employee/createEmployee.js";
import { createNewInsuranceType } from "@/services/insurance/createInsuranceType.js";

const CreateInsuranceType = ({ handelAllInsurance }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [role, setRole] = useState("");
  const [insuranceTypeName, setInsuranceTypeName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [employeeImgUrl, setEmployeeImgUrl] = useState("")


  const handleCreateInsurance = async (d) => {
    try {
      setIsLoading((prev) => true);
      // validation
      if (insuranceTypeName == "") {
        throw new Error("invalid insuranceTypeName");
      }

      const response = await createNewInsuranceType(insuranceTypeName)
      console.log(response.data);
      handelAllInsurance();
      MessageSuccess("Created Insurance");
      return;
    } catch (error) {
      if(error.response){
        MessageError(error.response.data.message);
      }else{
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
                Create Insurance
              </h5>
              <div>
                <label className="my-form-label">
                  Insurance Type Name
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setInsuranceTypeName(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <button
                type="button"
                className="my-form-submit-btn"
                onClick={handleCreateInsurance}
              >
                Add Insurance
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateInsuranceType;
