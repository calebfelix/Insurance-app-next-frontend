import axios from "axios";
export const UpdateAgent = async (
    agentName, email, qualification, status, agentAddress, id
) => {
  const res = await axios.put(
    `http://127.0.0.1:20200/api/v1/agent/${id}`,
    { agentName, email, qualification, status, agentAddress },
    { headers: { auth: localStorage.getItem("auth") } }
  );
  return res;
};
