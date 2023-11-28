import axios from "axios";

export const getAllState = async (params) => {
  const res = await axios.get(`http://127.0.0.1:20200/api/v1/state`, {
    headers: { auth: localStorage.getItem("auth") },
    params: params,
  });

  return res;
};
