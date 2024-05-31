import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { updateBankInfo } from "../../src/utils/redux/actions/actions";

const BankInfo = ({ bankInfo, updateBankInfo }) => {
  console.log("bankinfo", bankInfo)
  const navigate = useNavigate();
  const [error, setError] = useState(null);


  const handleBankInfoClick = async (event) => {
    event.preventDefault();
    try {
      updateBankInfo(bankInfo);
      navigate("/vendor/review-info");
    } catch (err) {
      setError("Basic information is not correct");
      console.error("Basic Info error", err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateBankInfo({ [name]: value });
  };

  return (
    <div
      id="bank_info"
      className="bg-cubblue shadow-lg border-2 rounded-xl border-cubred p-3 sm:flex sm:flex-wrap sm:gap-x-2 lg:w-1/2 lg:h-2/3 lg:flex lg:flex-col xl:flex-auto"
    >
      <form
          id="bankInfoForm"
          method="POST"
          onSubmit={handleBankInfoClick}
        >
        <label htmlFor="bank_name" className="text-white">
          Bank Name
        </label>
        <input
          type="text"
          name="bank_name"
          id="bank_name"
          placeholder="Bank Name"
          className="bg-white my-2 p-3"
          value={bankInfo.bank_name}
          onChange={handleChange}
        />
    

      <div className="flex flex-col w-full sm:w-6/12 lg:w-full">
        <label htmlFor="account_number" className="text-white">
          Account Number
        </label>
        <input
          type="number"
          name="account_number"
          id="account_number"
          placeholder="Account Number"
          className="bg-white my-2 p-3 w-full sm:w-full"
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
          className="bg-white my-2 p-3"
          value={bankInfo.routing_number}
          onChange={handleChange}
        />
      </div>

      <div className="py-2 signup">
        <button
          type="submit"
          id="newVendorSubmit"
          className="hover:bg-cubred bg-cubblue border-cubred border-2 text-white px-4 py-3 rounded-xl font-medium w-full"
        >
          Submit
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

