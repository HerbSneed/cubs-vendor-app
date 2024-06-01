import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { updateBankInfo } from "../../src/utils/redux/actions/actions";

const BankInfo = ({ bankInfo, updateBankInfo }) => {
  console.log("bankinfo", bankInfo)
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleBackClick = () => {
    navigate(-1);
  };


  const handleBankInfoClick = async (event) => {
    event.preventDefault();
    if (
      !bankInfo.bank_name ||
      !bankInfo.account_number ||
      !bankInfo.routing_number
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      updateBankInfo(bankInfo);
      navigate("/vendor/submitted");
    } catch (err) {
      setError("Bank information is not correct");
      console.error("Bank Info error", err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateBankInfo({ [name]: value });
  };

  return (
    <div
      id="bank_info"
      className="bg-cubblue shadow-lg border-2 rounded-xl border-cubred mx-auto p-3 sm:flex sm:flex-wrap sm:gap-x-2 w-11/12 lg:w-1/2 lg:h-2/3 mt-[25%] lg:flex lg:flex-col xl:flex-auto bg-opacity-80"
    >
      <form id="bankInfoForm" method="POST" onSubmit={handleBankInfoClick}>
        <div className="flex flex-col w-full sm:w-6/12 lg:w-full">
          <label htmlFor="bank_name" className="text-white">
            Bank Name
          </label>
          <input
            type="text"
            name="bank_name"
            id="bank_name"
            placeholder="Bank Name"
            className="bg-white mb-3 p-3"
            value={bankInfo.bank_name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-full sm:w-6/12 lg:w-full">
          <label htmlFor="account_number" className="text-white">
            Account Number
          </label>
          <input
            type="number"
            name="account_number"
            id="account_number"
            placeholder="Account Number"
            className="bg-white mb-3 p-3 w-full sm:w-full"
            value={bankInfo.account_number}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-full sm:w-3/12 lg:w-full flex-auto">
          <label htmlFor="routing_number" className="text-white">
            Routing Number
          </label>
          <input
            type="text"
            name="routing_number"
            id="routing_number"
            placeholder="Routing Number"
            className="bg-white mb-3 p-3"
            value={bankInfo.routing_number}
            onChange={handleChange}
          />
        </div>

        <div className="mt-3 flex gap-x-3">
          <button
            type="button"
            id="newVendorSubmit"
            onClick={handleBackClick}
            className="hover:border-cubred text-center bg-cubred  border text-white px-4 py-3 rounded-md font-medium w-full rounded-md border  hover:border-cubblue"
          >
            Back
          </button>
          
          <button
            type="submit"
            id="newVendorSubmit"
            className=" bg-cubred border text-white px-4 py-3 cursor-pointer font-medium w-full rounded-md hover:border-cubblue"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bankInfo: state.bankInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateBankInfo: (data) => dispatch(updateBankInfo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankInfo);

