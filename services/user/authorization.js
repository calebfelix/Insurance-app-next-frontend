import axios from "axios";

export const login = async (username, password, role) => {
  console.log(">>>>>>>>>>>>>>>>>>>",username, password, role)
  const res = await axios.post(`http://127.0.0.1:20200/api/v1/login`, {
    username,
    password,
    role,
  });
  return res;
};

export const verify = async () => {
  console.log("inside verify");
  const response = await axios.post(
    `http://127.0.0.1:20200/api/v1/verify`,
    { username: localStorage.getItem("username") },
    { headers: { auth: localStorage.getItem("auth") } }
  );
  console.log("response", response);
  return response;
};
