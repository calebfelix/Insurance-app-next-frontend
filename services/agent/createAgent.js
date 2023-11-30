import axios from "axios";
export const CreateNewAgent = async (
  employeeId,
  agentName,
  username,
  password,
  email,
  agentAddress,
  qualification
) => {
  const res = await axios.post(
    `http://127.0.0.1:20200/api/v1/agent/${employeeId}`,
    {
      agentName,
      username,
      password,
      email,
      agentAddress,
      qualification,
    },
    { headers: { auth: localStorage.getItem("auth") } }
  );
  return res;
};
