import axios from "axios";
export const createNewInsuranceType = async (insuranceTypeName) => {
  const res = await axios.post(
    `http://127.0.0.1:20200/api/v1/insurancetype`,
    {
      insuranceTypeName
    },
    { headers: { auth: localStorage.getItem("auth") } }
  );
  return res;
};
