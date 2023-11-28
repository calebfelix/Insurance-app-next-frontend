import axios from "axios";
export const CreateNewEmployee = async (
  role,
  employeeName,
  username,
  password,
  email,
  employeeImgUrl,
  id
) => {
  const res = await axios.post(
    `http://127.0.0.1:20200/api/v1/employee`,
    { role, employeeName, username, password, email, employeeImgUrl, id },
    { headers: { auth: localStorage.getItem("auth") } }
  );
  return res;
};
