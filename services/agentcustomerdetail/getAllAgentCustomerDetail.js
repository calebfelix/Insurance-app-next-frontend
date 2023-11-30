import axios from "axios";

export const getAllAgentCustomerDetail = async (params) => {
  const res = await axios.get(`http://127.0.0.1:20200/api/v1/agentcustomerdetail`, {
    headers: { auth: localStorage.getItem("auth") },
    params: params,
  });

  return res;
};
