import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { updateDisclaimerInfo } from "../utils/redux/actions/actions";
import { useState} from "react"


const Disclaimer = ({ disclaimerInfo, updateDisclaimerInfo }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);


  const handleAgree = async (event) => {
    event.preventDefault();
    // Update the disclaimer_agreement property to true
    const updatedDisclaimerInfo = {
      ...disclaimerInfo,
      disclaimer_agreement: "Agreed",
    };
    // Call updateDisclaimerInfo with the updated object
    updateDisclaimerInfo(updatedDisclaimerInfo);
    navigate("/vendor/business-info");
  };

  const handleDisagree = async (event) => {
    event.preventDefault();
    alert("Please agree to above disclaimer to continue.")
  };




  return (
    <div className=" absolute top-0 bg-cubblue w-full bg-opacity-50 flex flex-col items-center h-screen">
      <div className="mt-[25%] sm:mt-[15%] mx-auto sm:w-10/12">
        <p className="text-center text-white mx-4 md:leading-relaxed md:text-xl">
          Except in limited situations, the Company*** is not eligible for any
          state sales tax exemptions, and as such, expects its vendors and
          suppliers to charge it the appropriate local sales tax on taxable
          transactions. The Company expects sales tax to be collected based on
          where the goods are shipped. In addition, the Company expects its
          vendors and suppliers to charge it any other applicable local taxes;
          i.e. lease tax. Please confirm that you are able to collect the
          appropriate taxes from the Company under the applicable jurisdiction's
          tax rules. If you are unable to collect the appropriate taxes, please
          let us know so we can set up our processes to report the required
          taxes.
        </p>

        <p className="font-bold my-2 md:leading-relaxed text-center text-white mx-4 sm:px-10 md:px-9 md:text-lg">
          The above-named vendor is able to, and will, charge appropriate local
          and state sales and other taxes on its invoices:
        </p>

        <div className="text-white mx-5 mt-3 font-bold flex justify-between sm:justify-center sm:gap-x-10">
          <button
            className="bg-cubred py-2 px-6 hover:border-cubred bg-cubred  border text-white px-4 py-3 rounded-md  hover:bg-cubblue rounded-md border  hover:border-cubblue rounded-md"
            onClick={handleAgree}
          >
            Agree
          </button>
          <button
            className="bg-cubred p-2 hover:border-cubred bg-cubred  border text-white px-4 py-3 rounded-md  hover:bg-cubblue rounded-md border  hover:border-cubblue rounded-md"
            onClick={handleDisagree}
          >
            Disagree
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  disclaimerInfo: state.disclaimerInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateDisclaimerInfo: (data) => dispatch(updateDisclaimerInfo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Disclaimer);
