import axios from "axios";
export const SendEMailAgent = async () => {
  const res = await axios.post(
    `http://127.0.0.1:20200/api/v1/SendEmail`,
    { headers: { auth: localStorage.getItem("auth") } }
  );
  return res;
};
