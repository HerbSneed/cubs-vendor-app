import Welcome from "../assets/images/WELCOME.webp"

const VendorSubmitted = () => {

  return (
    <>
      <div className="absolute bg-cubblue w-full max-h-screen top-0 h-screen bg-opacity-50 items-center">
        <div className="flex mt-[20%]  flex-col w-[500px] sm:w-[500px] md:w-[610px] mx-auto">
          <img className=" drop-shadow-lg  w-[100%] mx-auto" src={Welcome} />

          <p className="drop-shadow-lg text-sm sm:text-lg px-3 sm:px-5 md:px-3 -mt-3 sm:-mt-4 md:-mt-5 leading-relaxed text-center text-lg md:text-xl text-white">
            Thank you for submitting your form. We will reach out if additional
            information is needed. To submit another vendor form, click the
            button below. Otherwise, you may close this window.
          </p>

          <a
            id="newVendor"
            className="text-center mt-5 px-3 py-2 font-bold bg-cubred rounded-md text-white cursor-pointer mt-3 mx-auto hover:border-cubblue border"
            href="/vendor/new-vendor"
          >
            New Vendor
          </a>
        </div>
      </div>
    </>
  );
};

export default VendorSubmitted;



