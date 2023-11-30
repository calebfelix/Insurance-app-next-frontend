import axios from "axios";
export const UpdatePlan = async (
  insuranceTypeId,
  planId,
  policyTermMin,
  policyTermMax,
  maxAge,
  minAge,
  maxInvestmentAmount,
  minInvestmentAmount,
  profitRatio,
  commissionAmount,
  status
) => {
  console.log("plamnidddddddddd", planId);
  const res = await axios.put(
    `http://127.0.0.1:20200/api/v1/plan/${insuranceTypeId}/${planId}`,
    {
      policyTermMin,
      policyTermMax,
      maxAge,
      minAge,
      maxInvestmentAmount,
      minInvestmentAmount,
      profitRatio,
      commissionAmount,
      status
    },
    { headers: { auth: localStorage.getItem("auth") } }
  );
  return res;
};
