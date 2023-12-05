import axios from "axios";
export const CreateNewPlan = async (
  insuranceTypeId,
  policyTermMin,
  policyTermMax,
  minAge,
  maxAge,
  minInvestmentAmount,
  maxInvestmentAmount,
  profitRatio,
  commissionAmount
) => {
  console.log("beforeeeee");
  const res = await axios.post(
    `http://127.0.0.1:20200/api/v1/plan/${insuranceTypeId}`,
    {
      policyTermMin,
      policyTermMax,
      minAge,
      maxAge,
      minInvestmentAmount,
      maxInvestmentAmount,
      profitRatio,
      commissionAmount,
    },
    {
      headers: { auth: localStorage.getItem("auth") },
    }
  );
  return res;
};
