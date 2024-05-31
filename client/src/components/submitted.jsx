
const VendorSubmitted = () => {
  return (
    <div className="flex flex-col justify-center items-center">


      <div className="bg-white text-center px-4">
        <p className="mt-4 text-lg text-gray-700">
          Your form has been received. We'll contact you if we need more
          information. To submit another vendor form, click below. Otherwise,
          you can close the window.
        </p>
      </div>

      <a
        id="newVendor"
        className="text-center px-1 w-28 bg-cubred shadow-lg rounded-xl text-white hover:bg-cubblue cursor-pointer absolute mt-3 left-1/2 transform -translate-x-1/2"
        href="/vendor"
      >
        New Vendor
      </a>
    </div>
  );
};

export default VendorSubmitted;



