import axios from "axios";
export const createNewInsuranceType = async (insuranceName) => {
  const res = await axios.post(
    `http://127.0.0.1:20200/api/v1/insurancetype`,
    {
      insuranceName
    },
    { headers: { auth: localStorage.getItem("auth") } }
  );
  return res;
};
