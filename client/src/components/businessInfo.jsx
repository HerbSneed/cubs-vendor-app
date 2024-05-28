import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateBusinessInfo } from "../../src/utils/redux/actions/actions";
import SignaturePad from 'signature_pad';


const BusinessInfo = ({ businessInfo, updateBusinessInfo }) => {
  console.log("businessInfo", businessInfo);
    const navigate = useNavigate();
    const [error, setError] = useState(null);


    useEffect(() => {
      const canvas = document.getElementById("signature-pad");
      const signatureInput = document.querySelector("#authorized_signature");
      const clearSignatureButton = document.querySelector("#clearSignature");

      function resizeCanvas() {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
      }

      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();

      const signaturePad = new SignaturePad(canvas, {
        backgroundColor: "rgb(250, 250, 250)",
      });

      clearSignatureButton.addEventListener("click", function () {
        signaturePad.clear();
        signatureInput.value = "";
      });

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }, []);

    const handleBusinessClick = async (event) => {
    event.preventDefault();
    try {
      updateBusinessInfo(businessInfo);

      navigate("/vendor/bank-info");
      
    } catch (err) {
      setError("Bank information is not correct");
      console.error("Basic Info error", err);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    updateBusinessInfo({ [name]: type === "checkbox" ? checked : value,
    });
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

          <div className="flex flex-col w-full sm:h-64">
            <label htmlFor="authorized_signature" className="text-white">
              Authorized Signature
            </label>
            <canvas
              id="signature-pad"
              className="border bg-white my-2 sm:w-full sm:h-3/4"
            ></canvas>
            <button
              type="button"
              id="clearSignature"
              className="bg-cubred rounded px-2 sm:w-1/3 lg:w-1/3 text-white"
            >
              Clear Signature
            </button>
            <input
              type="hidden"
              name="authorized_signature"
              id="authorized_signature"
              value={businessInfo.authorized_signature}
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

