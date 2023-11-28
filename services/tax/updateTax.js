import axios from "axios";
export const UpdateTax = async (taxPercentage, id) => {

    const res = await axios.put(`http://127.0.0.1:20200/api/v1/tax/${id}`, { taxPercentage }, { headers: { auth: localStorage.getItem("auth") } })
    return res
}