import { useRouter } from "next/navigation";
import React from "react";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <button
      className="text-white m-5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      type="button"
      onClick={(e) => {
        router.back();
      }}
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
