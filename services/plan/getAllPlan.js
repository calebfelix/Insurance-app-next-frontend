import axios from "axios";

export const getAllPlans = async (insuranceTypeId, params) => {
    const res = await axios.get(`http://127.0.0.1:20200/api/v1/plan/${insuranceTypeId}`, {
        headers: { auth: localStorage.getItem("auth") },
        params: params
    });

    return res;

};