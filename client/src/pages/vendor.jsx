import { useState } from "react";
import Welcome from "../components/welcome";
import BasicInfo from "../components/basicInfo";
import BuisnessInfo from "../components/businessInfo";
import BankInfo from "../components/bankInfo";
import Disclaimer from "../components/disclaimer";
import VendorInfoReviewForm from "../components/vendorInfoReviewForm";

const Vendor = () => {
  const [isBasicComplete, setIsBasicComplete] = useState(false);
  const [isDisclaimerAgreement, setIsDisclaimerAgreement] = useState(false);
  const [isBuisnessComplete, setIsBuisnessComplete] = useState(false);
  const [isBankComplete, setIsBankComplete] = useState(false);

  return (
    <div className="bg-cubsBlue">
      {isBasicComplete ? (
        isDisclaimerAgreement ? (
          isBuisnessComplete ? (
            isBankComplete ? (
              <VendorInfoReviewForm />
            ) : (
              <BankInfo onComplete={() => setIsBankComplete(true)} />
            )
          ) : (
            <BuisnessInfo onComplete={() => setIsBuisnessComplete(true)} />
          )
        ) : (
          <Disclaimer onComplete={() => setIsDisclaimerAgreement(true)} />
        )
      ) : (
        <BasicInfo onComplete={() => setIsBasicComplete(true)} />
      )}
    </div>
  );
};

export default Vendor;
