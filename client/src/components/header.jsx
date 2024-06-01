import CubsRedLogo from '../assets/images/CubsProductions_PrimaryLogo_v2.png';


const Header = () => {
  return (
    <>
      <header
        id="main"
        className="sticky z-50 top-0 bg-cubblue py-1 mx-auto"
      >
        <a
          href="/">
          <img
            src={CubsRedLogo}
            alt="cubs red logo"
            className="w-[40%] mx-auto"
          />
        </a>
      </header>
    </>
  );
}

export default Header;
