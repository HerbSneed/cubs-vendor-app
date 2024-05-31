const welcome = ({ onNewVendorClick }) => {
  return (


      <div className="flex flex-col mx-auto rounded-lg bg-gray-100 w-[92%] py-10 items-center justify-center mt-[50%] bg-opacity-80 gap-y-5">
        <h1 className="font-bold text-2xl text-center">
          Welcome to the Cubs Vendor Sign up app!
        </h1>

        <div className="flex gap-x-3 text-white font-semibold">
          <button
            className="bg-cubred py-2 px-5 rounded-md"
            onClick={onNewVendorClick}
          >
            New Vendor
          </button>
          <button className="bg-cubred p-2 rounded-md">Existing Vendor</button>
        </div>
      </div>
  );
};

export default welcome;
