
const welcome = ({ onNewVendorClick }) => {
  return (
    <div className="flex flex-col mx-auto rounded-lg bg-gray-100 w-[350px] -mt-10  px-2 py-10 items-center justify-center bg-opacity-70 gap-y-5">
      <h1 className="font-bold text-2xl text-cubblue text-center">
        Welcome to the Cubs Vendor Sign up app!
      </h1>

      <div className="flex gap-x-3 text-white font-semibold">
        <button
          className="bg-cubred hover:bg-cubblue py-2 px-5 rounded-md border  hover:border-cubblue"
          onClick={onNewVendorClick}
        >
          New Vendor
        </button>
      </div>
    </div>
  );
}

export default welcome;
