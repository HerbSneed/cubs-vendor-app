import CubsRedLogo from '../assets/images/CubsProductions_PrimaryLogo_v2.png';


const Header = () => {
  return (
    <>
      <header
        id="main"
        className="sticky z-50 flex justify-center items-center top-0 bg-cubblue h-16 md:h-20 w-full py-1 mx-auto"
      >
        <a href="/">
          <img
            src={CubsRedLogo}
            alt="cubs red logo"
            className="w-[150px] md:w-[175px] mx-auto"
          />
        </a>
      </header>
    </>
  );
}

export default Header;
