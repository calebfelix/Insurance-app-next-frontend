import axios from "axios";
export const UpdateInsuranceType = async (status, id) => {
  const res = await axios.put(
    `http://127.0.0.1:20200/api/v1/insuranceType/${id}`,
    { status },
    { headers: { auth: localStorage.getItem("auth") } }
  );
  return res;
};
