import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {
  updateBasicInfo,
  updateBusinessInfo,
  updateBankInfo,
} from "../../src/utils/redux/actions/actions";

const VendorInfoReviewForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const basicInfo = useSelector((state) => state.basicInfo);
  const businessInfo = useSelector((state) => state.businessInfo);
  const bankInfo = useSelector((state) => state.bankInfo);

  const [formState, setFormState] = useState({
    ...basicInfo,
    ...businessInfo,
    ...bankInfo,
  });

  const [editMode, setEditMode] = useState({
    basicInfo: false,
    businessInfo: false,
    bankInfo: false,
  });

  const [error, setError] = useState(null);

  const handleEdit = (event) => {
    const { name, value, type, checked } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Dispatch updates to Redux store
      dispatch(
        updateBasicInfo({
          vendor_name: formState.vendor_name,
          contact_firstName: formState.contact_firstName,
          contact_lastName: formState.contact_lastName,
          contact_MiddleInt: formState.contact_MiddleInt,
          tax_id: formState.tax_id,
          contact_phone_number: formState.contact_phone_number,
          remittance_address: formState.remittance_address,
          city: formState.city,
          state: formState.state,
          zip_code: formState.zip_code,
          country: formState.country,
          remittance_email: formState.remittance_email,
        })
      );
      dispatch(
        updateBusinessInfo({
          service_provided: formState.service_provided,
          minority_ownership: formState.minority_ownership,
          authorized_name: formState.authorized_name,
          authorized_phone_number: formState.authorized_phone_number,
          authorized_signature: formState.authorized_signature,
        })
      );
      dispatch(
        updateBankInfo({
          bank_name: formState.bank_name,
          account_number: formState.account_number,
          routing_number: formState.routing_number,
        })
      );

      // Send data to backend
      await axios.post("/api/vendor", formState);
      navigate("/vendor/submitted");
    } catch (err) {
      setError("There was an error submitting the form. Please try again.");
      console.error("Form submission error:", err);
    }
  };

  const toggleEditMode = (section) => {
    setEditMode((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Basic Information</h2>
      <button type="button" onClick={() => toggleEditMode("basicInfo")}>
        {editMode.basicInfo ? "Lock" : "Edit"}
      </button>
      <div>
        <label>Vendor Name:</label>
        <input
          type="text"
          name="vendor_name"
          value={formState.vendor_name}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Contact First Name:</label>
        <input
          type="text"
          name="contact_firstName"
          value={formState.contact_firstName}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Contact Last Name:</label>
        <input
          type="text"
          name="contact_lastName"
          value={formState.contact_lastName}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Contact Middle Initial:</label>
        <input
          type="text"
          name="contact_MiddleInt"
          value={formState.contact_MiddleInt}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Vendor Tax Id/SSN:</label>
        <input
          type="text"
          name="tax_id"
          value={formState.tax_id}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Contact Phone Number:</label>
        <input
          type="text"
          name="contact_phone_number"
          value={formState.contact_phone_number}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Remittance Address:</label>
        <input
          type="text"
          name="remittance_address"
          value={formState.remittance_address}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formState.city}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formState.state}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Zipcode:</label>
        <input
          type="text"
          name="zip_code"
          value={formState.zip_code}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formState.country}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Remittance Email:</label>
        <input
          type="text"
          name="remittance_email"
          value={formState.remittance_email}
          onChange={handleEdit}
          readOnly={!editMode.basicInfo}
          className="text-black"
        />
      </div>

      {/* Business Info */}

      <h2>Business Information</h2>
      <button type="button" onClick={() => toggleEditMode("businessInfo")}>
        {editMode.businessInfo ? "Lock" : "Edit"}
      </button>
      <div>
        <label>Service Provided:</label>
        <input
          type="text"
          name="service_provided"
          value={formState.service_provided}
          onChange={handleEdit}
          readOnly={!editMode.businessInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Minority Ownership:</label>
        <select
          name="minority_ownership"
          value={formState.minority_ownership}
          onChange={handleEdit}
          disabled={!editMode.businessInfo}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>

      <div>
        <label>Authorized Name:</label>
        <input
          type="text"
          name="authorized_name"
          value={formState.authorized_name}
          onChange={handleEdit}
          readOnly={!editMode.businessInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Authorized Phone Number:</label>
        <input
          type="text"
          name="authorized_phone_number"
          value={formState.authorized_phone_number}
          onChange={handleEdit}
          readOnly={!editMode.businessInfo}
          className="text-black"
        />
      </div>

      <div>
        <label>Authorized Signature:</label>
        {formState.authorized_signature && (
          <img
            src={formState.authorized_signature}
            alt="Authorized Signature"
            className="my-2"
          />
        )}
      </div>

      {/* Bank Info */}

      <h2>Bank Information</h2>
      <button type="button" onClick={() => toggleEditMode("bankInfo")}>
        {editMode.bankInfo ? "Lock" : "Edit"}
      </button>
      <div>
        <label>Bank Name:</label>
        <input
          type="text"
          name="bank_name"
          value={formState.bank_name}
          onChange={handleEdit}
          readOnly={!editMode.bankInfo}
        />
      </div>

      <div>
        <label>Account Number:</label>
        <input
          type="text"
          name="account_number"
          value={formState.account_number}
          onChange={handleEdit}
          readOnly={!editMode.bankInfo}
        />
      </div>

      <div>
        <label>Routing Number:</label>
        <input
          type="text"
          name="routing_number"
          value={formState.routing_number}
          onChange={handleEdit}
          readOnly={!editMode.bankInfo}
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
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default VendorInfoReviewForm;
