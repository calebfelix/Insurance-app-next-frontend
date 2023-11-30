import { useEffect, useState } from "react";
import Spinner from "../../shared-components/Spinner/Spinner.js";
import { MessageError, MessageSuccess } from "../../error/Errors.js";
import { CreateNewEmployee } from "@/services/employee/createEmployee.js";

const CreateCustomer = ({ handelAllCustomers }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("")
  const [state, setState] = useState([])
  const [city, setCity] = useState("")
  const [pincode, setPincode] = useState("")
  const [mobileno, setMobileno] = useState("")
  const [nominee, setNominee] = useState("")
  const [nomineeRelation, setNomineeRelation] = useState("")
  const [customerAddress, setCustomerAddress] = useState("");

  const [photo,setPhoto]=useState()
  const[allState,setAllState]=useState([])
  const[stateId,setStateId]=useState("")


  const handleCreateEmployee = async (d) => {
    try {
      setIsLoading((prev) => true);
      // validation
      if (role == "") {
        throw new Error("invalid role");
      }
      if (employeeName == "") {
        throw new Error("invalid employeeName");
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

      const response = await CreateNewEmployee(role, employeeName, username, password, email,employeeImgUrl)
      console.log(response.data);
      handelAllCustomers();
      MessageSuccess("Created Added");
      return;
    } catch (error) {   
      MessageError(error.message);
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
                Create Customer
              </h5>
              <div>
                <label className="my-form-label">
                  Customer Name
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">
                  Username
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">
                  Password
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmployeeImgUrl("D:/TRAINING_NEXSALES/INSURANCE/Frontend_insurance/img/prof.jpg")
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
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
              </div>
              <button
                type="button"
                className="my-form-submit-btn"
                onClick={handleCreateEmployee}
              >
                Add Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCustomer;
