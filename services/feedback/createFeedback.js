import axios from "axios";
export const CreateFeedbackCustomer = async (
  customerName,
  title,
  message,
  contactDate,
  policyId,
  customerId
) => {
  const res = await axios.post(
    `http://127.0.0.1:20200/api/v1/feedbacl/${customerId}`,
    {
      customerName,
      title,
      message,
      contactDate,
      policyId
    },
    {
      headers: { auth: localStorage.getItem("auth") },
    }
  );
};
