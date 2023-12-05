import { useEffect, useState } from "react";
import Spinner from "../../shared-components/Spinner/Spinner.js";
import { MessageError, MessageSuccess } from "../../error/Errors.js";
import { CreateNewEmployee } from "@/services/employee/createEmployee.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CreateNewCustomer } from "@/services/customer/createCustomer.js";
import AllAgentDropDown from "../allAgentDropDown/AllAgentDropDown.js";
import { isValidEmail, isValidMobileno } from "@/utils/Validator.js";
import AllStateDropDown from "../allStateDropDown/AllStateDropDown.js";

const CreateCustomer = ({ handelAllCustomers }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [nominee, setNominee] = useState("");
  const [nomineeRelation, setNomineeRelation] = useState("");
  const [customerImgUrl, setCustomerImgUrl] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agentId, setAgentId] = useState("");

  // const [photo,setPhoto]=useState()
  // const[allState,setAllState]=useState([])
  // const[stateId,setStateId]=useState("")

  const handleCreateEmployee = async (d) => {
    try {
      setIsLoading((prev) => true);
      // validation
      if (customerName == "") {
        throw new Error("invalid customerName");
      }
      if (dob == "") {
        throw new Error("invalid dob");
      }
      if (address == "") {
        throw new Error("invalid address");
      }
      if (state == "") {
        throw new Error("invalid state");
      }
      if (city == "") {
        throw new Error("invalid city");
      }
      if (pincode == "") {
        throw new Error("invalid pincode");
      }
      if (mobileno == "") {
        throw new Error("invalid mobileno");
      }
      if (!isValidMobileno(mobileno)) {
        throw new Error("invalid mobileno");
      }
      if (nominee == "") {
        throw new Error("invalid nominee");
      }
      if (nomineeRelation == "") {
        throw new Error("invalid nomineeRelation");
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
      if (!isValidEmail(email)) {
        throw new Error("invalid email address");
      }
      if (agentId == "") {
        throw new Error("invalid agentId");
      }

      const response = await CreateNewCustomer(
        customerName,
        username,
        password,
        email,
        dob,
        address,
        state,
        city,
        pincode,
        mobileno,
        nominee,
        nomineeRelation,
        customerImgUrl,
        localStorage.getItem("id")
      );
      console.log(response.data);
      handelAllCustomers();
      MessageSuccess("Customer Added");
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
                Create Customer
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
                <div>
                  <label className="my-form-label mt-5">Date of Birth</label>
                  <DatePicker
                    className="my-form-input"
                    dateFormat="yyyy/MM/dd"
                    selected={dob}
                    onChange={(dob) => setDob(dob)}
                  />
                </div>
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
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setCustomerImgUrl("/assets/img/prof.jpg");
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">State</label>
                {/* <input
                  type="text"
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  className="my-form-input"
                ></input> */}
                <AllStateDropDown setState={setState}/>
              </div>
              <div>
                <label className="my-form-label">Pincode</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setPincode(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Address</label>
                <input
                  type="text-area"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">City</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">mobile no</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setMobileno(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Nominee</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setNominee(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Nominee relation</label>
                <select
                  onChange={(e) => {
                    setNomineeRelation(e.target.value);
                  }}
                  className="my-form-input"
                >
                  <option value={""}>-select-</option>
                  <option value={"Son"}>Son</option>
                  <option value={"Daughter"}>Daughter</option>
                  <option value={"Husband"}>Husband</option>
                  <option value={"Wife"}>Wife</option>
                  <option value={"Brother"}>Brother</option>
                  <option value={"Sister"}>Sister</option>
                </select>
              </div>

              <div>
                <label className="my-form-label">Assign Agent</label>
                <AllAgentDropDown setAgentId={setAgentId} />
              </div>

              <button
                type="button"
                className="my-form-submit-btn"
                onClick={handleCreateEmployee}
              >
                Add customer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCustomer;
