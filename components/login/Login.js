'use client'
import React from "react";
// import { login as userLogin } from "../lib/login/login";
import { useState } from "react";
import { MessageError, MessageSuccess } from "../../error/Errors";
import { useRouter } from "next/navigation";
import { login } from "@/services/user/authorization";




const Login = () => {
  const router = useRouter()

  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState()
  const [loader, setLoader] = useState(false)



  const validateUsername = (e) => {
    setUsername(e.target.value);
  };
  const validatePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLogin = async (e) => {
    try {

      e.preventDefault();
      setLoader(prev => true)
      if (userName == "") {
        throw new ValidationError("plz enter username")

      }
      if (password.length == "") {
        throw new ValidationError("plz enter password")
      }

      const response = await login(userName, password, role);
      console.log(response);
      console.log("////////////////////////////////////////////", response.data.role);
      localStorage.setItem("auth", response.headers.auth);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("id", response.data.id);

      if (!response?.data.id) {
        throw new Error("invalid credential")

      }
      if (response.data.role == "Employee") {

        MessageSuccess("login sucessful")

        router.push('/employee');

      }
      if (response.data.role == "Admin") {
        MessageSuccess("login sucessful")
        router.push("/admin");
      }
      if (response.data.role == "Agent") {
        MessageSuccess("login sucessful")

        router.push('/agent');
      }

      if (response.data.role == "Customer") {
        MessageSuccess("login sucessful")

        router.push('/customer');

      }
    }
    catch (error) {

      MessageError("login failed")

    }
    finally {
      setLoader(prev => false)
    }

  };

  return (
    <>
      {/* <Spinner loader={loader} /> */}
      {/* <SnackbarProvider autoHideDuration={3000} /> */}
    {/* <Navbar/> */}

      <div class="my-form-container">
        <form class="my-main-form">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Login
              </h5>
          <div>
            <label className="my-form-label">Username</label>
            <input className="my-form-input" onChange={validateUsername} />
          </div>
          <div>
            <label className="my-form-label">Password</label>
            <input className="my-form-input" onChange={validatePassword}  />
          </div>
          <div>
            <label className="my-form-label">Role</label>
            <select className="my-form-input" onChange={handleRoleChange}>
              <option value="">Select a role</option>
              <option value="Admin">Admin</option>
              <option value="Agent">Agent</option>
              <option value="Customer">Customer</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <button className="my-form-submit-btn" onClick={handleLogin}>Login</button>
        </form>
      </div>

    </>
  );
};

export default Login;