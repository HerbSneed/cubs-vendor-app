import CubsRedLogo from '../assets/images/CubsProductions_PrimaryLogo_v2.png';


const Header = () => {
  return (
    <>
      <header
        id="main"
        className="sticky z-50 top-0 bg-cubblue py-2 mx-auto"
      >
        <div>
          <img
            src={CubsRedLogo}
            alt="cubs red logo"
            className="w-[35%] mx-auto"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
