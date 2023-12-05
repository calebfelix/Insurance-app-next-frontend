import axios from "axios";
export const CreateNewCustomer = async (
  customerName,
  username,
  password,
  email,
  dob,
  address,
  state,
  city,
  pincode,
  mobileno,
  nominee,
  nomineeRelation,
  customerImgUrl,
  agentId
) => {
  const res = await axios.post(
    `http://127.0.0.1:20200/api/v1/customer`,
    {
      customerName,
      username,
      password,
      email,
      dob,
      address,
      state,
      city,
      pincode,
      mobileno,
      nominee,
      nomineeRelation,
      customerImgUrl,
      agentId
    },
    { headers: { auth: localStorage.getItem("auth") } }
  );
  return res;
};
