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
    `http://127.0.0.1:20200/api/v1/feedback`,
    {
      customerName,
      title,
      message,
      contactDate,
      policyId,
      customerId
    },
    {
      headers: { auth: localStorage.getItem("auth") },
    }
  );
};
