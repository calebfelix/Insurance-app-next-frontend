import axios from "axios";

export const getAllPolicy = async (params) => {
    const res = await axios.get(`http://127.0.0.1:20200/api/v1/policy`, {
        headers: { auth: localStorage.getItem("auth") },
        params: params
    });

    return res;
    // const res = await axios.get(`http://127.0.0.1:20200/api/v1/contactDetail`, {
    //     headers: { auth: localStorage.getItem("auth") },
    //     params: {
    //         limit, page
    //     },
    // });

    // return res;
};
