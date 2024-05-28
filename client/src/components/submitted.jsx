
const Submitted = () => {
  return (
    <div
      id="submitted"
      className="h-screen flex flex-col justify-center items-center py-4"
      style="background-image: url('/images/Cubs_Family.jpg'); background-size: cover; background-position:center;"
    >
      <div className="landscape:h-[180px] h-1/6 w-[100%] bg-contain bg-no-repeat bg-center bg-[url('/images/WELCOME.webp')]"></div>

      <div className="bg-white text-center px-4">
        <p className="mt-4 text-lg text-gray-700">
          Your form has been received. We'll contact you if we need more
          information. To submit another vendor form, click below. Otherwise,
          you can close the window.
        </p>
      </div>

      <a
        id="newVendor"
        className="text-center px-1 w-28 bg-cubred shadow-lg rounded-xl text-white hover:bg-cubblue cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2"
        href="/"
      >
        New Vendor
      </a>
    </div>
  );
}

export default Submitted;



