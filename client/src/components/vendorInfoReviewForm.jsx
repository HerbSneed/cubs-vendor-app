import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BasicInfo from "./basicInfo";
import BusinessInfo from "./businessInfo";
import BankInfo from "./bankInfo";

const VendorInfoReviewForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    vendor_name: "",
    contact_firstName: "",
    contact_lastName: "",
    contact_MiddleInt: "",
    tax_id: "",
    contact_phone_number: "",
    remittance_address: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    remittance_email: "",
    service_provided: "",
    minority_ownership: false,
    authorized_name: "",
    authorized_phone_number: "",
    authorized_signature: "",
    bank_name: "",
    account_number: "",
    routing_number: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/vendor", formState);
      // Handle successful response
      navigate("/success");
    } catch (err) {
      setError("There was an error submitting the form. Please try again.");
      console.error("Form submission error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <BasicInfo formState={formState} setFormState={setFormState} />
      <BusinessInfo formState={formState} setFormState={setFormState} />
      <BankInfo formState={formState} setFormState={setFormState} />
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
