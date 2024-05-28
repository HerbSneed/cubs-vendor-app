import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { connect } from 'react-redux';
import { updateBasicInfo } from '../../src/utils/redux/actions/actions';

const BasicInfo = ({ basicInfo, updateBasicInfo}) => {
  console.log("basicInfo:", basicInfo)

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  // const { vendor, contact_f_name, contact_l_name, contact_m_init, contact_phone_number, tax_id, remittance_address, city, state, zipcode, country,
  // remittance_email } = basicInfo;

  const handleBasicClick = async (event) => {
    event.preventDefault();
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
    <form id="basicInfoForm" method="POST" onSubmit={handleBasicClick}>
      <label htmlFor="vendor" className="text-white">
        Vendor Name
      </label>
      <input
        type="text"
        name="vendor"
        id="vendor"
        value={basicInfo.vendor}
        onChange={handleChange}
        placeholder="Your Vendor Name"
        className="bg-white w-full my-2 p-3"
      />

      <label htmlFor="contact_info" className="text-white">
        Contact Name
      </label>
      <div className="flex justify-between">
        <input
          type="text"
          name="contact_f_name"
          id="contact_f_name"
          value={basicInfo.contact_f_name}
          onChange={handleChange}
          placeholder="First Name"
          className="bg-white w-5/12 my-2 p-3 mr-2"
        />
        <input
          type="text"
          name="contact_l_name"
          id="contact_l_name"
          value={basicInfo.contact_l_name}
          onChange={handleChange}
          placeholder="Last Name"
          className="bg-white w-5/12 my-2 p-3 mr-2"
        />
        <input
          type="text"
          name="contact_m_init"
          id="contact_m_init"
          value={basicInfo.contact_m_init}
          onChange={handleChange}
          placeholder="M.I."
          className="bg-white w-2/12 my-2 p-3"
        />
      </div>

      <div className="flex justify-between">
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
            className="bg-white my-2 p-3 w-full"
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
            className="bg-white my-2 p-3 w-full"
          />
        </div>
      </div>

      <div
        id="locale"
        className="bg-cubblue border-2 border-cubred shadow-lg rounded-xl flex flex-wrap gap-x-2 p-3 w-full lg:w-1/2 xl:w-1/2 mt-2 lg:mt-0 lg:flex-auto"
      >
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
            className="bg-white my-2 p-3"
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
            className="bg-white my-2 p-3"
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
            className="bg-white my-2 p-3"
          />
        </div>

        <div className="flex flex-col w-2/4 sm:w-1/3">
          <label htmlFor="zipcode" className="text-white">
            Zip Code
          </label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            value={basicInfo.zipcode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="bg-white my-2 p-3"
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
            className="bg-white my-2 p-3"
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
            className="bg-white my-2 p-3 w-full"
          />
        </div>
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
  );
};

const mapStateToProps = (state) => ({
  basicInfo: state.basicInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateBasicInfo: (data) => dispatch(updateBasicInfo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);
