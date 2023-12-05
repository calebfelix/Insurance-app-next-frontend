import axios from "axios";
export const Create = async (
  amount,
  years,
  typeofpremimum,
  paymentMethod,
  insuranceTypeId,
  planId
) => {
  const res = await axios.post(
    `http://127.0.0.1:20200/api/v1/policy/${insuranceTypeId}/${planId}`,
    {
      amount,
      years,
      typeofpremimum,
      paymentMethod,
    },
    {
      headers: { auth: localStorage.getItem("auth") },
    }
  );
};
