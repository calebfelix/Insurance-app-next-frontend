import axios from "axios";
export const CreateNewState = async (stateName) => {
  const res = await axios.post(
    `http://127.0.0.1:20200/api/v1/state`,
    { stateName },
    { headers: { auth: localStorage.getItem("auth") } }
  );
  return res;
};
