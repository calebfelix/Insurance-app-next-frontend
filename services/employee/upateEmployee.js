import axios from "axios";
export const UpdateEmployee = async (
  role,
  employeeName,
  password,
  email,
  status,
  employeeImgUrl,
  id
) => {
  const res = await axios.put(
    `http://127.0.0.1:20200/api/v1/employee/${id}`,
    { role, employeeName, password, email, status, employeeImgUrl },
    { headers: { auth: localStorage.getItem("auth") } }
  );
  return res;
};
