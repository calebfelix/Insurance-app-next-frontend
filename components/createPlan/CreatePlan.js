import { useEffect, useState } from "react";
import Spinner from "../../shared-components/Spinner/Spinner.js";
import { MessageError, MessageSuccess } from "../../error/Errors.js";
import { CreateNewPlan } from "@/services/plan/createPlan.js";
import { useParams } from "next/navigation.js";
import { getAllPlans } from "@/services/plan/getAllPlan.js";

const CreatePlan = ({ handelAllPlans }) => {
  const { insuranceTypeId } = useParams();
  // console.log(useParams())
  const [isLoading, setIsLoading] = useState(false);

  const [policyTermMin, setPolicyTermMin] = useState(-1);
  const [policyTermMax, setPolicyTermMax] = useState(-1);
  const [minAge, setMinAge] = useState(-1);
  const [maxAge, setMaxAge] = useState(-1);
  const [minInvestmentAmount, setMinInvestmentAmout] = useState(-1);
  const [maxInvestmentAmount, setMaxInvestmentAmount] = useState(-1);
  const [profitRatio, setProfitRatio] = useState(-1);
  const [commissionAmount, setCommissionAmount] = useState(-1);
  const [status, setStatus] = useState();

  const handleCreatePlan = async (d) => {
    try {

      let params={}
      let res = await getAllPlans(insuranceTypeId,params)
      console.log(res.data)
      setIsLoading((prev) => true);
      // validation
      if(res.data.length!=0){
        throw new Error("Plan Already for this type");
      }
      if (policyTermMin <0) {
        throw new Error("invalid policyTerm min");
      }
      if (policyTermMax <0) {
        throw new Error("invalid policyTerm max");
      }
      if (policyTermMin > policyTermMax) {
        throw new Error("policyTermMin > policyTermMax");
      }
      if (minAge <0) {
        throw new Error("invalid minimum age");
      }
      if (maxAge <0) {
        throw new Error("invalid maximum age");
      }
      if (minAge > maxAge) {
        throw new Error("minAge > maxAge");
      }
      if (minInvestmentAmount <0) {
        throw new Error("invalid minimum investment amount");
      }
      if (maxInvestmentAmount <0) {
        throw new Error("invalid maximum investment amount");
      }
      if (minInvestmentAmount > maxInvestmentAmount) {
        throw new Error("minInvestmentAmount > maxInvestmentAmount");
      }
      if (profitRatio <0) {
        throw new Error("invalid profit ratio");
      }
      if (commissionAmount <0) {
        throw new Error("invalid commission amount");
      }
      console.log(insuranceTypeId)
      
      const response = await CreateNewPlan(
        insuranceTypeId,
        policyTermMin,
        policyTermMax,
        minAge,
        maxAge,
        minInvestmentAmount,
        maxInvestmentAmount,
        profitRatio,
        commissionAmount
      );
      
      handelAllPlans();
      MessageSuccess("Created Plan");
      return;
    } catch (error) {
      if(error.response){
        MessageError(error.response.data.message);
      }else{
        MessageError(error.message);
      }
    } finally {
      setIsLoading((prev) => false);
    }
  };

  return (
    <>
      <Spinner isLoading={isLoading} />
      <div className="mx-auto w-[25%]">
        <div className="flex justify-center mt-10">
          <div className="my-form-container">
            <form className="my-main-form">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Create Plan
              </h5>
              <div>
                <label className="my-form-label">Policy Term Minimim</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setPolicyTermMin(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Policy Term Maximum</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setPolicyTermMax(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Minimum Age</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setMinAge(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Maximum Age</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setMaxAge(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">
                  Minimim Investment Amount
                </label>
                <input
                  type="number"
                  onChange={(e) => {
                    setMinInvestmentAmout(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">
                  Maximum Investment Amount
                </label>
                <input
                  type="number"
                  onChange={(e) => {
                    setMaxInvestmentAmount(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Profit Ratio</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setProfitRatio(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>
              <div>
                <label className="my-form-label">Commission Amount</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setCommissionAmount(e.target.value);
                  }}
                  className="my-form-input"
                ></input>
              </div>

              {/* <div>
                <label className="my-form-label">
                  role
                </label>
                <select
                  className="my-form-input"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  <option value="">select</option>
                  <option value="admin">admin</option>
                  <option value="Employee">employee</option>
                </select>
              </div> */}
              <button
                type="button"
                className="my-form-submit-btn"
                onClick={handleCreatePlan}
              >
                Add Plan
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePlan;
