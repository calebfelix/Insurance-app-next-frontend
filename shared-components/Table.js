import React, { useState } from "react";
import PaginationShared from "./PaginationShared";
import RowButtons from "./RowButtons";
import Spinner from "./Spinner/Spinner";
import { Pagination } from "@mui/material";
import DownloadButton from "./downloadButton/DownloadButton";

const Table = ({
  rows,
  downloadRows,
  setLimit,
  setOffset,
  limit,
  offset,
  count,
  isPurchaseButton,
        handlePurchase,
  isBuyPlanButton,
  handleBuyPlan,
  handlePlan,
  handleUpdate,
  handleDelete,
  handleView,
  isPlanButton,
  isUpdateButton,
  isDeleteButton,
  isViewButton,
  hasNoButtons,
  isDeposite,
  isWithdraw,
  isTransfer,
  handleDeposite,
  handleWithdraw,
  handleTransfer,
}) => {
  let headerForTable;
  let dataForTable;

  if (rows.length !== 0) {
    let keysArray = Object.keys(rows[0] || {});
    if (!hasNoButtons) {
      keysArray.push("Edit");
    }
    let dataArray = Object.values(rows);

    headerForTable = keysArray.map((key) => {
      return (
        <th scope="col" className="px-6 py-3" key={Math.random()}>
          {key}
        </th>
      );
    });

    dataForTable = dataArray.map((d) => {
      return (
        <tr
          className="my-tr"
          key={Math.random()}
        >
          {keysArray.map((key) => {
            if (d[key] === true) {
              return (
                <td className="px-6 py-4" key={Math.random()}>
                  True
                </td>
              );
            }
            if (d[key] === false) {
              return (
                <td className="px-6 py-4" key={Math.random()}>
                  False
                </td>
              );
            }
            if (key == "Edit") {
              return (
                <td className="px-6 py-4" key={Math.random()}>
                  <RowButtons
                    handleUpdate={handleUpdate}
                    handlePlan={handlePlan}
                    handleDelete={handleDelete}
                    handleView={handleView}
                    itemData={d}
                    isPurchaseButton={isPurchaseButton}
        handlePurchase={handlePurchase}
                    isPlanButton={isPlanButton}
                    isDeleteButton={isDeleteButton}
                    isUpdateButton={isUpdateButton}
                    isViewButton={isViewButton}
                    isBuyPlanButton={isBuyPlanButton}
                    handleBuyPlan= {handleBuyPlan}
                    isDeposite={isDeposite}
                    isWithdraw={isWithdraw}
                    isTransfer={isTransfer}
                    handleDeposite={handleDeposite}
                    handleWithdraw={handleWithdraw}
                    handleTransfer={handleTransfer}
                  />
                </td>
              );
            }
            return (
              <td className="px-6 py-4" key={Math.random()}>
                {d[key]}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  if (rows.length == 0) {
    return (
      <>
        {/* <div style={{ marginLeft: "5em" }}>
          <h1>No records found</h1>
          <p>Please add new records</p>
        </div> */}
        <div className="my-table-container">
          <table className="my-main-table">
            <thead className="my-thead">
              <tr>
                <th scope="col" className="px-6 py-3" key={Math.random()}>
                  No records found
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="my-tr"
                key={Math.random()}
              >
                <td className="px-6 py-4" key={Math.random()}>
                  Please add new records
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "20px",
        }}
      >
        <PaginationShared
          setOffset={setOffset}
          limit={limit}
          offset={offset}
          count={count}
        />
        <div className="flex">
          {/* <p>Records per page</p> */}
          <select
            className="my-form-input"
            value={limit}
            onChange={(e) => {
              setLimit((prev) => e.target.value);
              let noOfPages = Math.ceil(count / e.target.value);
              setOffset(1);
            }}
          >
            <option value="1">
              1
            </option>
            <option value="2">
              2
            </option>
            <option value="5">
              5
            </option>
            <option value="10">
              10
            </option>
          </select>
        </div>
      </div>
      <div className="my-table-container">
        <table className="my-main-table">
          <thead className="my-thead">
            <tr key={Math.random()}>{headerForTable}</tr>
          </thead>
          <tbody>{dataForTable}</tbody>
        </table>
        <DownloadButton downloadData={downloadRows}/>
      </div>
    </>
  );
};

export default Table;
