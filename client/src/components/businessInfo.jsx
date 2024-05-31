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

  const handleBusinessClick = async (event) => {
    event.preventDefault();
    try {
      if (signaturePadRef.current) {
        const dataURL = signaturePadRef.current
          .getTrimmedCanvas()
          .toDataURL("image/png");
        updateBusinessInfo({ authorized_signature: dataURL });
      }
      navigate("/vendor/bank-info");
    } catch (err) {
      setError("Bank information is not correct");
      console.error("Basic Info error", err);
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
    <div className="flex flex-col w-full gap-x-2 gap-y-2 lg:flex-row">
      <div
        id="business_info"
        className="rounded-xl bg-cubblue border-2 shadow-lg border-cubred p-3 sm:flex sm:flex-wrap sm:gap-2 lg:gap-0 lg:gap-x-2 lg:w-1/2"
      >
        <form
          id="buisnessInfoForm"
          method="POST"
          onSubmit={handleBusinessClick}
        >
          <label htmlFor="service_provided" className="text-white">
            Service Provided
          </label>
          <input
            type="text"
            name="service_provided"
            id="service_provided"
            placeholder="Service Provided"
            className="bg-white my-2 p-3"
            value={businessInfo.service_provided}
            onChange={handleChange}
          />

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
              className="bg-white my-2 w-1/4 sm:w-3/6 p-3 h-12"
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
              className="bg-white my-2 p-3"
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
              className="bg-white w-full my-2 p-3"
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
                className: "signature-canvas w-full h-full",
                style: { backgroundColor: "white" },
              }}
            />
            <button
              type="button"
              onClick={clearSignature}
              id="clearSignature"
              className="bg-cubred rounded px-2 sm:w-1/3 lg:w-1/3 text-white"
            >
              Clear Signature
            </button>
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
