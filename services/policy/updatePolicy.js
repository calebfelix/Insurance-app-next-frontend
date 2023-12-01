import axios from "axios";
export const UpdatePolicy = async (insuranceType, planName, primimumType, totalPremimumAmount, profitRatio, sumAssured, requestStatus, customerId, agentId, planId, id) => {
    console.log(id, "idddd");
    const res = await axios.put(`http://127.0.0.1:20200/api/v1/policy/${id}`, { insuranceType, planName, primimumType, totalPremimumAmount, profitRatio, sumAssured, requestStatus, customerId, agentId, planId }, { headers: { auth: localStorage.getItem("auth") } })
    return res
}