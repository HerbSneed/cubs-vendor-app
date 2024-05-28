import { useNavigate } from "react-router-dom";

const Disclaimer = () => {
  const navigate = useNavigate();

  const handleAgree = async (event) => {
    event.preventDefault();
    navigate("/vendor/business-info")
  };

  const handleDisagree = async (event) => {
    event.preventDefault();
    navigate("/vendor")
  };


  return (
    <div>
      <p className="my-2">
        Except in limited situations, the Company*** is not eligible for any
        state sales tax exemptions, and as such, expects its vendors and
        suppliers to charge it the appropriate local sales tax on taxable
        transactions. The Company expects sales tax to be collected based on
        where the goods are shipped. In addition, the Company expects its
        vendors and suppliers to charge it any other applicable local taxes;
        i.e. lease tax. Please confirm that you are able to collect the
        appropriate taxes from the Company under the applicable jurisdiction's
        tax rules. If you are unable to collect the appropriate taxes, please
        let us know so we can set up our processes to report the required taxes.
      </p>

      <p className="font-bold my-2">
        The above-named vendor is able to, and will, charge appropriate local
        and state sales and other taxes on its invoices:
      </p>

      <div>
        <button onClick={handleAgree}>
          Agree</button>
        <button onClick={handleDisagree}>
          Disagree</button>
      </div>
    </div>
  );
};

export default Disclaimer;
