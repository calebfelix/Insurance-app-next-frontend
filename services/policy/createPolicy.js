import axios from "axios";
export const Create = async (insuranceType, planName, dateCreated, maturityDate, primimumType, totalPremimumAmount, profitRatio, sumAssured, requestStatus, customerId, agentId, planId) => {
    const res = await axios.post(`http://127.0.0.1:20200/api/v1/policy`, {
        insuranceType, planName, dateCreated, maturityDate, primimumType, totalPremimumAmount, profitRatio, sumAssured, requestStatus, customerId, agentId, planId
    }, {

        headers: { auth: localStorage.getItem("auth") },
        params: params
    });
}