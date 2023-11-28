import axios from "axios";

export const getAllAgent = async (params) => {
  const res = await axios.get(`http://127.0.0.1:20200/api/v1/agent`, {
    headers: { auth: localStorage.getItem("auth") },
    params: params,
  });

  return res;
};
