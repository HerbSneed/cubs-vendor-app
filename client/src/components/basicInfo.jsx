import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { updateBasicInfo } from "../../src/utils/redux/actions/actions";


const BasicInfo = ({ basicInfo, updateBasicInfo }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleBasicClick = async (event) => {
    event.preventDefault();

    // Check if required fields are filled out
    if (
      !basicInfo.vendor_name ||
      !basicInfo.contact_firstName ||
      !basicInfo.contact_lastName ||
      !basicInfo.contact_phone_number ||
      !basicInfo.tax_id ||
      !basicInfo.remittance_address ||
      !basicInfo.city ||
      !basicInfo.state ||
      !basicInfo.zip_code ||
      !basicInfo.country ||
      !basicInfo.remittance_email
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      updateBasicInfo(basicInfo);
      navigate("/vendor/disclaimer");
    } catch (err) {
      setError("Basic information is not correct");
      console.error("Basic Info error", err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateBasicInfo({ [name]: value });
  };

  return (
    <div id="locale">
      <form
        id="basicInfoForm"
        method="POST"
        onSubmit={handleBasicClick}
        className="bg-cubblue border-2 border-cubred bg-opacity-80 shadow-lg rounded-xl mx-auto flex flex-col my-[10%] gap-2 p-3 w-11/12  lg:w-1/2 xl:w-1/2"
      >
        <div className="flex flex-wrap gap-x-2">
          <label htmlFor="vendor" className="text-white w-full">
            Vendor Name
          </label>
          <input
            type="text"
            name="vendor_name"
            id="vendor_name"
            value={basicInfo.vendor_name}
            onChange={handleChange}
            placeholder="Your Vendor Name"
            className="bg-white w-full mb-3 p-3"
          />

          <label htmlFor="contact_info" className="text-white w-full">
            Contact Name
          </label>
          <div className="flex justify-between w-full">
            <input
              type="text"
              name="contact_firstName"
              id="contact_firstName"
              value={basicInfo.contact_firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="bg-white w-5/12 mb-3 p-3 mr-2"
            />
            <input
              type="text"
              name="contact_lastName"
              id="contact_lastName"
              value={basicInfo.contact_lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="bg-white w-5/12 mb-3 p-3 mr-2"
            />
            <input
              type="text"
              name="contact_MiddleInt"
              id="contact_MiddleInt"
              value={basicInfo.contact_MiddleInt}
              onChange={handleChange}
              placeholder="M.I."
              className="bg-white w-2/12 mb-3 p-3"
            />
          </div>

          <div className="flex justify-between w-full">
            <div className="w-6/12 mr-2">
              <label htmlFor="contact_phone_number" className="text-white">
                Contact Phone #
              </label>
              <br />
              <input
                type="tel"
                name="contact_phone_number"
                id="contact_phone_number"
                value={basicInfo.contact_phone_number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-white mb-3 p-3 w-full"
              />
            </div>

            <div className="w-6/12">
              <label htmlFor="tax_id" className="text-white">
                Tax ID/SSN
              </label>
              <br />
              <input
                type="text"
                name="tax_id"
                id="tax_id"
                value={basicInfo.tax_id}
                onChange={handleChange}
                placeholder="Tax ID or SSN"
                className="bg-white mb-3 p-3 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-2/3">
            <label htmlFor="remittance_address" className="text-white">
              Remittance Street Address or P.O. Box
            </label>
            <input
              type="text"
              name="remittance_address"
              id="remittance_address"
              value={basicInfo.remittance_address}
              onChange={handleChange}
              placeholder="Street Address or P.O. Box"
              className="bg-white mb-3 p-3"
            />
          </div>

          <div className="flex flex-col w-2/3 sm:w-1/4 flex-auto">
            <label htmlFor="city" className="text-white">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={basicInfo.city}
              onChange={handleChange}
              placeholder="City"
              className="bg-white mb-3 p-3"
            />
          </div>

          <div className="flex flex-col w-1/4 sm:w-1/3 flex-auto">
            <label htmlFor="state" className="text-white">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              value={basicInfo.state}
              onChange={handleChange}
              placeholder="State"
              className="bg-white mb-3 p-3"
            />
          </div>

          <div className="flex flex-col w-2/4 sm:w-1/3">
            <label htmlFor="zip_code" className="text-white">
              Zip Code
            </label>
            <input
              type="text"
              name="zip_code"
              id="zip_code"
              value={basicInfo.zip_code}
              onChange={handleChange}
              placeholder="Zip Code"
              className="bg-white mb-3 p-3"
            />
          </div>

          <div className="flex flex-col w-1/4 flex-auto">
            <label htmlFor="country" className="text-white">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              value={basicInfo.country}
              onChange={handleChange}
              placeholder="Country"
              className="bg-white mb-3 p-3"
            />
          </div>

          <div className="flex flex-col w-2/4 flex-auto">
            <label htmlFor="remittance_email" className="text-white">
              Remittance Email
            </label>
            <input
              type="email"
              name="remittance_email"
              id="remittance_email"
              value={basicInfo.remittance_email}
              onChange={handleChange}
              placeholder="Remittance Email"
              className="bg-white mb-3 p-3 w-full"
            />
          </div>
        </div>

        <div className="mt-3 flex gap-x-3">
          <button
            type="button"
            id="newVendorSubmit"
            onClick={ handleBackClick }
            className="hover:border-cubred text-center bg-cubred  border text-white px-4 py-3 rounded-md font-medium w-full rounded-md border  hover:border-cubblue"
          >
            Back
          </button>

          <button
            type="submit"
            id="newVendorSubmit"
            className="hover:border-cubred bg-cubred  border text-white px-4 py-3 rounded-md font-medium w-full rounded-md border  hover:border-cubblue"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basicInfo: state.basicInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateBasicInfo: (data) => dispatch(updateBasicInfo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);
