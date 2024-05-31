import { useNavigate } from "react-router-dom";
import Welcome from "../components/welcome";


const Landing = () => {
  const navigate = useNavigate();

  const handleNewVendorClick = () => {
    navigate('/vendor/new-vendor')

  };

  return (
    <>
      <Welcome onNewVendorClick={handleNewVendorClick} />
    </>
  );
};

export default Landing;
