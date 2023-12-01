import axios from "axios"


export const deletePolicy = async (id) => {
    console.log(id, ">>>>>>>>>>>>>>>>>>.");
    const res = await axios.delete(`http://127.0.0.1:20200/api/v1/policy/${id}`, { headers: { auth: localStorage.getItem('auth') } })
    return res
}
