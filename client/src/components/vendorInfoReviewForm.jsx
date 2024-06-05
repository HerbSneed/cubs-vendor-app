import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";
import {
  updateBasicInfo,
  updateBusinessInfo,
  updateBankInfo,
  updateDisclaimerInfo,
} from "../../src/utils/redux/actions/actions";
import SignatureCanvas from "react-signature-canvas";

const VendorInfoReviewForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const basicInfo = useSelector((state) => state.basicInfo);
  const businessInfo = useSelector((state) => state.businessInfo);
  const bankInfo = useSelector((state) => state.bankInfo);
  const disclaimerInfo = useSelector((state) => state.disclaimerInfo);

  const [formState, setFormState] = useState({
    ...basicInfo,
    ...businessInfo,
    ...bankInfo,
    ...disclaimerInfo,
  });

  const [signature, setSignature] = useState(formState.authorized_signature);



  const [editMode, setEditMode] = useState({
    basicInfo: false,
    businessInfo: false,
    bankInfo: false,
  });

  const [error, setError] = useState(null);
   const sigCanvas = useRef({});

  const handleEdit = (event) => {
    const { name, value, type, checked } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAcceptSignature = () => {
    if (sigCanvas.current) {
      const newSignature = sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      setSignature(newSignature);
      setFormState((prev) => ({
        ...prev,
        authorized_signature: newSignature,
      }));
      toggleEditMode("businessInfo"); // Lock the signature field after accepting
    }
  };

  const handleClearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      setSignature(null);
      setFormState((prev) => ({
        ...prev,
        authorized_signature: null,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editMode.businessInfo && sigCanvas.current) {
      setFormState((prev) => ({
        ...prev,
        authorized_signature: sigCanvas.current
          .getTrimmedCanvas()
          .toDataURL("image/png"),
      }));
    }
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
        updateDisclaimerInfo({
          disclaimer_agreement: formState.disclaimer_agreement,
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
    <>
      <div className="flex flex-col my-4 justify-center items-center w-full lg:justify-start">
        <section className="lg:absolute lg:mt-[90px] top-0 text-center lg:text-lg w-[350px] lg:w-[400px] ">
          <p className="mx-4 text-white drop-shadow-sm">
            Review the information you provided before submitting. Click the
            edit button to make corrections.
          </p>
        </section>

        <form
          onSubmit={handleSubmit}
          method="POST"
          className="lg:flex lg:gap-y-6 lg:w-[750px] lg:items-start lg:-mt-[100px] lg:flex-wrap"
        >
          {/* BASIC INFO */}

          <section className="bg-cubblue border-2 border-cubred bg-opacity-80 shadow-lg rounded-xl flex flex-col my-[2%] lg:my-0 gap-2 p-3 w-[350px] mx-auto">
            <div className="flex justify-between">
              <h2 className="text-3xl text-white font-bold">
                Basic Information
              </h2>

              <button
                className="bg-cubred px-1 text-white text-md font-bold rounded-xl"
                type="button"
                onClick={() => toggleEditMode("basicInfo")}
              >
                {editMode.basicInfo ? "Lock" : "Edit"}
              </button>
            </div>

            <div className="w-full flex flex-col mt-1">
              <label htmlFor="vendor" className="text-white w-1/2">
                Vendor Name:
              </label>

              <input
                type="text"
                name="vendor_name"
                value={formState.vendor_name}
                onChange={handleEdit}
                readOnly={!editMode.basicInfo}
                className="bg-white mb-3 px-1"
              />
            </div>

            <div className="flex w-full gap-x-3 ">
              <div className="flex flex-col w-5/12 mt-1">
                <label htmlFor="vendor" className="text-white">
                  First Name:
                </label>
                <input
                  type="text"
                  name="contact_firstName"
                  value={formState.contact_firstName}
                  onChange={handleEdit}
                  readOnly={!editMode.basicInfo}
                  className="bg-white mb-3 px-1"
                />
              </div>

              <div className="flex flex-col w-5/12 mt-1">
                <label className="text-white">Last Name:</label>
                <input
                  type="text"
                  name="contact_lastName"
                  value={formState.contact_lastName}
                  onChange={handleEdit}
                  readOnly={!editMode.basicInfo}
                  className="text-black px-1"
                />
              </div>

              <div className="flex flex-col w-1/12  mt-1">
                <label className="text-white">M.I.</label>
                <input
                  type="text"
                  name="contact_MiddleInt"
                  value={formState.contact_MiddleInt}
                  onChange={handleEdit}
                  readOnly={!editMode.basicInfo}
                  className="text-black text-center"
                />
              </div>
            </div>

            <div className="w-full flex gap-x-3">
              <div className="flex flex-col w-6/12">
                <label className="text-white">Vendor Tax ID/SSN:</label>
                <input
                  type="text"
                  name="tax_id"
                  value={formState.tax_id}
                  onChange={handleEdit}
                  readOnly={!editMode.basicInfo}
                  className="text-black"
                />
              </div>

              <div className="flex flex-col w-6/12">
                <label className="text-white">Contact Phone #:</label>
                <input
                  type="text"
                  name="contact_phone_number"
                  value={formState.contact_phone_number}
                  onChange={handleEdit}
                  readOnly={!editMode.basicInfo}
                  className="text-black px-1 mr-3"
                />
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-full">
              <label className="text-white">Remittance Address:</label>
              <input
                type="text"
                name="remittance_address"
                value={formState.remittance_address}
                onChange={handleEdit}
                readOnly={!editMode.basicInfo}
                className="text-black px-1"
              />
            </div>

            <div className="w-full flex">
              <div className="flex flex-col w-8/12">
                <label className="text-white">City:</label>
                <input
                  type="text"
                  name="city"
                  value={formState.city}
                  onChange={handleEdit}
                  readOnly={!editMode.basicInfo}
                  className="text-black px-1 mr-3"
                />
              </div>

              <div className="flex flex-col w-2/12">
                <label className="text-white">State:</label>
                <input
                  type="text"
                  name="state"
                  value={formState.state}
                  onChange={handleEdit}
                  readOnly={!editMode.basicInfo}
                  className="text-black px-1 mr-3"
                />
              </div>

              <div className="flex flex-col w-3/12">
                <label className="text-white">Zipcode:</label>
                <input
                  type="text"
                  name="zip_code"
                  value={formState.zip_code}
                  onChange={handleEdit}
                  readOnly={!editMode.basicInfo}
                  className="text-black px-1 mr-2"
                />
              </div>
            </div>

            <div className="flex flex-col w-8/12">
              <label className="text-white">Country:</label>
              <input
                type="text"
                name="country"
                value={formState.country}
                onChange={handleEdit}
                readOnly={!editMode.basicInfo}
                className="text-black px-1 mr-3"
              />
            </div>

            <div className="flex flex-col w-12/12">
              <label className="text-white">Remittance Email:</label>
              <input
                type="text"
                name="remittance_email"
                value={formState.remittance_email}
                onChange={handleEdit}
                readOnly={!editMode.basicInfo}
                className="text-black px-1"
              />
            </div>
          </section>

          {/* Business Info */}

          <section className="bg-cubblue border-2 border-cubred bg-opacity-80 shadow-lg rounded-xl mx-auto flex flex-col my-[5%] lg:my-0 gap-2 p-3 w-[350px]">
            <div className="flex justify-between">
              <h2 className="text-3xl  text-white font-bold">Business Info</h2>
              <button
                type="button"
                onClick={() => toggleEditMode("businessInfo")}
                className="bg-cubred px-1 text-white text-md font-bold rounded-xl"
              >
                {editMode.businessInfo ? "Lock" : "Edit"}
              </button>
            </div>

            <div className="flex flex-col w-full lg:w-full">
              <label className="text-white">Service Provided:</label>
              <input
                type="text"
                name="service_provided"
                value={formState.service_provided}
                onChange={handleEdit}
                readOnly={!editMode.businessInfo}
                className="text-black px-1"
              />
            </div>

            <div className="flex flex-col w-1/4 h-1/4">
              <label className="text-white">Minority Owned:</label>
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

            <div className="flex gap-x-2">
              <div className="flex flex-col w-1/2">
                <label className="text-white">Authorized Name:</label>
                <input
                  type="text"
                  name="authorized_name"
                  value={formState.authorized_name}
                  onChange={handleEdit}
                  readOnly={!editMode.businessInfo}
                  className="text-black px-1"
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label className="text-white">Authorized Phone #:</label>
                <input
                  type="text"
                  name="authorized_phone_number"
                  value={formState.authorized_phone_number}
                  onChange={handleEdit}
                  readOnly={!editMode.businessInfo}
                  className="text-black mr-2 px-1"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="text-white">Authorized Signature:</label>
              {editMode.businessInfo ? (
                <>
                  <SignatureCanvas
                    penColor="black"
                    canvasProps={{
                      className: "signature-canvas w-full h-[150px] bg-white",
                    }}
                    ref={sigCanvas}
                  />
                  <div className="flex justify-between mt-2">
                    <button
                      type="button"
                      className="cursor-pointer bg-cubred border rounded-md px-2 w-5/12 mt-1 text-white hover:border-cubblue"
                      onClick={handleAcceptSignature}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer bg-cubred border rounded-md px-2 w-5/12 mt-1 text-white hover:border-cubblue"
                      onClick={handleClearSignature}
                    >
                      Clear
                    </button>
                  </div>
                </>
              ) : (
                signature && (
                  <img
                    src={signature}
                    alt="Authorized Signature"
                    className="my-2 bg-cubred h-[150px]"
                  />
                )
              )}
            </div>
          </section>

          {/* Bank Info */}
          <section className="bg-cubblue border-2 border-cubred bg-opacity-80 shadow-lg rounded-xl mx-auto flex flex-col my-[5%] lg:my-0 gap-2 p-3 w-[350px]">
            <div className="flex justify-between">
              <h2 className="text-3xl text-center text-white font-bold">
                Bank Information
              </h2>
              <button
                type="button"
                onClick={() => toggleEditMode("bankInfo")}
                className="bg-cubred px-1 text-white text-md font-bold rounded-xl"
              >
                {editMode.bankInfo ? "Lock" : "Edit"}
              </button>
            </div>

            <div className="w-1/2 flex flex-col mt-1 ">
              <label className="text-white">Bank Name:</label>
              <input
                type="text"
                name="bank_name"
                value={formState.bank_name}
                onChange={handleEdit}
                readOnly={!editMode.bankInfo}
                className="px-1"
              />
            </div>

            <div className="flex w-full gap-x-2">
              <div className="flex flex-col w-1/2">
                <label className="text-white">Account Number:</label>
                <input
                  type="text"
                  name="account_number"
                  value={formState.account_number}
                  onChange={handleEdit}
                  readOnly={!editMode.bankInfo}
                  className="px-1"
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label className="text-white">Routing Number:</label>
                <input
                  type="text"
                  name="routing_number"
                  value={formState.routing_number}
                  onChange={handleEdit}
                  readOnly={!editMode.bankInfo}
                  className="mr-2 px-1"
                />
              </div>
            </div>
          </section>

          {error && <p className="text-red-500">{error}</p>}

          <div className="signup lg:w-full lg:flex lg:items-center lg:justify-center ">
            <button
              type="submit"
              onClick={handleSubmit}
              id="newVendorSubmit"
              className="cursor-pointer hover:border-cubred bg-cubred border text-white px-4 py-3 lg:w-[125px] rounded-md font-medium w-full rounded-md border  hover:border-cubblue "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default VendorInfoReviewForm;
