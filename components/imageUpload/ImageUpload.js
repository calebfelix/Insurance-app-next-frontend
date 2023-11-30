import { MessageError } from "@/error/Errors";
import React from "react";

const ImageUpload = () => {
  const handleUpload = (e) => {
    try {
      console.log(e.target.value);
    } catch (error) {
      MessageError(error.message);
    }
  };
  return (
    <>
      <input
        type="file"
        onChange={handleUpload}
        onClick={(e) => {
          console.log();
        }}
        className="my-form-input"
      ></input>
    </>
  );
};

export default ImageUpload;
