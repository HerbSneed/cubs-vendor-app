import Welcome from "../assets/images/WELCOME.png"

const VendorSubmitted = () => {

  return (
    <>
      <div className="bg-cubblue shadow-lg w-full h-screen bg-opacity-50 flex flex-col">
        <img className="w-11/12 mx-auto" src={Welcome} />

        <p className="drop-shadow-lg text-center px-7 text-lg text-white">
          Thank you for submitting your form. We will reach out if additional
          information is needed. To submit another vendor form, click the button
          below. Otherwise, you may close this window.
        </p>

        <a
          id="newVendor"
          className="text-center mt-5 px-3 py-2 font-bold bg-cubred rounded-md text-white cursor-pointer mt-3 mx-auto hover:border-cubblue border"
          href="/vendor/new-vendor"
        >
          New Vendor
        </a>
      </div>
    </>
  );
};

export default VendorSubmitted;



