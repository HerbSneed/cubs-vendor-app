import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateBusinessInfo } from "../../src/utils/redux/actions/actions";
import SignatureCanvas from "react-signature-canvas";

const BusinessInfo = ({ businessInfo, updateBusinessInfo }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const signaturePadRef = useRef(null);
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const canvas = signaturePadRef.current.getCanvas();
      const container = canvasContainerRef.current;

      if (canvas && container) {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = container.offsetWidth * ratio;
        canvas.height = container.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

   const handleBackClick = () => {
     navigate(-1);
   };

  const handleBusinessClick = async (event) => {
    event.preventDefault();

    const {
      service_provided,
      minority_ownership,
      authorized_name,
      authorized_phone_number,
    } = businessInfo;
    const authorized_signature = signaturePadRef.current.isEmpty()
      ? ""
      : signaturePadRef.current.toDataURL();

    if (
      !service_provided ||
      !minority_ownership === undefined ||
      !authorized_name ||
      !authorized_phone_number ||
      !authorized_signature
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      updateBusinessInfo({ ...businessInfo, authorized_signature });
      navigate("/vendor/bank-info");
    } catch (err) {
      setError("Business information is not correct");
      console.error("Business Info error", err);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    updateBusinessInfo({ [name]: type === "checkbox" ? checked : value });
  };

  const clearSignature = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
      updateBusinessInfo({ authorized_signature: "" });
    }
  };

  return (
    <div className="flex flex-col w-11/12 gap-x-2 gap-y-2 mx-auto py-[10%] lg:flex-row">
      <div
        id="business_info"
        className="rounded-xl bg-cubblue border-2 bg-opacity-80 shadow-lg border-cubred p-3 sm:flex sm:flex-wrap sm:gap-2 lg:gap-0 lg:gap-x-2 lg:w-1/2"
      >
        <form
          id="buisnessInfoForm"
          method="POST"
          onSubmit={handleBusinessClick}
        >
          <div className="flex flex-col w-full sm:w-1/4 lg:w-2/4 sm:flex-auto lg:flex-none">
            <label htmlFor="service_provided" className="text-white">
              Service Provided
            </label>
            <input
              type="text"
              name="service_provided"
              id="service_provided"
              placeholder="Service Provided"
              className="bg-white mb-3 p-3 w-full"
              value={businessInfo.service_provided}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full sm:w-1/4 lg:w-2/4 sm:flex-auto lg:flex-none">
            <label
              htmlFor="minority_ownership"
              className="text-white sm:w-full"
            >
              Minority Ownership
            </label>
            <select
              name="minority_ownership"
              id="minority_ownership"
              className="bg-white mb-3 w-3/12 sm:w-3/6 p-3 h-12"
              value={businessInfo.minority_ownership}
              onChange={handleChange}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>

          <div className="flex flex-col w-full sm:w-1/2 md:w-1/2">
            <label htmlFor="authorized_name" className="text-white">
              Authorized Name
            </label>
            <input
              type="text"
              name="authorized_name"
              id="authorized_name"
              placeholder="Authorized Name"
              className="bg-white mb-3 p-3"
              value={businessInfo.authorized_name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full sm:w-1/3 sm:flex-auto md:w-1/3">
            <label htmlFor="authorized_phone_number" className="text-white">
              Authorized Phone Number
            </label>
            <input
              type="text"
              name="authorized_phone_number"
              id="authorized_phone_number"
              placeholder="Authorized Phone Number"
              className="bg-white w-full mb-3 p-3"
              value={businessInfo.authorized_phone_number}
              onChange={handleChange}
            />
          </div>

          <div
            className="flex flex-col w-full sm:h-64"
            ref={canvasContainerRef}
          >
            <label htmlFor="authorized_signature" className="text-white">
              Authorized Signature
            </label>
            <SignatureCanvas
              ref={signaturePadRef}
              penColor="black"
              canvasProps={{
                className: "signature-canvas w-full h-[150px]",
                style: { backgroundColor: "white" },
              }}
            />

              <button
                type="button"
                onClick={clearSignature}
                id="clearSignature"
                className="bg-cubred border  rounded-md px-2 w-5/12 mt-3 sm:w-1/3 lg:w-1/3 text-white hover:border-cubblue"
              >
                Clear Signature
              </button>
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
                className=" bg-cubred border text-white px-4 py-3 rounded-xl font-medium w-full rounded-md hover:border-cubblue"
              >
                Next
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  businessInfo: state.businessInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateBusinessInfo: (data) => dispatch(updateBusinessInfo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessInfo);
