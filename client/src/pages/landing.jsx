import { useState } from "react";
import Welcome from "../components/welcome";
import BasicInfo from "../components/basicInfo";

const Landing = () => {
  const [isNewVendor, setIsNewVendor] = useState(false);

  const handleNewVendorClick = () => {
    setIsNewVendor(true);
  };

  return (
    <div className="bg-cubsBlue h-screen">
      {isNewVendor ? (
        <BasicInfo />
      ) : (
        <Welcome onNewVendorClick={handleNewVendorClick} />
      )}

    </div>
  );
};

export default Landing;
