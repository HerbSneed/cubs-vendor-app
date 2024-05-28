

const vendorSignup = () => {
  return (
    <div
      id="main"
      className="py-3 lg:py-6 px-2 md:px-4 sm:px-3 lg:px-8 min-h-screen"
      style={{
        backgroundImage: "url('/images/Wrigley_Field_02.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="border-4 rounded-2xl border-cubblue overflow-hidden">
        <div
          className="bg-cubblue -mt-1 landscape:h-[150px] sm:h-[16%] h-[150px] w-[100.5%] rounded-t-xl bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "url('/images/CubsProductions_PrimaryLogo_v2.webp')",
          }}
        ></div>

        <form id="vendorForm" method="POST" action="/api/vendor">
          <div className="bg-white bg-opacity-70 rounded-b-xl px-2 py-2">
            <div className="flex flex-col w-full gap-x-2 lg:flex-row lg:h-auto lg:gap-x-2 lg:justify-between">
              <div
                id="basic_info"
                className="bg-cubblue border-2 rounded-xl shadow-lg border-cubred p-3 w-full h-1/4 lg:w-1/2 xl:w-1/2 lg:flex-auto"
              >
                <label htmlFor="vendor_name" className="text-white">
                  Vendor Name
                </label>
                <input
                  type="text"
                  name="Vendor"
                  id="vendor"
                  placeholder="Your Vendor Name"
                  className="bg-white w-full my-2 p-3"
                  defaultValue=""
                />

                <label htmlFor="contact_info" className="text-white">
                  Contact Name
                </label>
                <div className="flex justify-between">
                  <input
                    type="text"
                    name="contact_f_name"
                    id="contact_f_name"
                    placeholder="First Name"
                    className="bg-white w-5/12 my-2 p-3 mr-2"
                    defaultValue=""
                  />
                  <input
                    type="text"
                    name="contact_l_name"
                    id="contact_l_name"
                    placeholder="Last Name"
                    className="bg-white w-5/12 my-2 p-3 mr-2"
                    defaultValue=""
                  />
                  <input
                    type="text"
                    name="contact_m_init"
                    id="contact_m_init"
                    placeholder="M.I."
                    className="bg-white w-2/12 my-2 p-3"
                    defaultValue=""
                  />
                </div>

                <div className="flex justify-between">
                  <div className="w-6/12 mr-2">
                    <label
                      htmlFor="contact_phone_number"
                      className="text-white"
                    >
                      Contact Phone #
                    </label>
                    <br />
                    <input
                      type="tel"
                      name="contact_phone_number"
                      id="contact_phone_number"
                      placeholder="Phone Number"
                      className="bg-white my-2 p-3 w-full"
                      defaultValue=""
                    />
                  </div>

                  <div className="w-6/12">
                    <label htmlFor="tax-id" className="text-white">
                      Tax ID/SSN
                    </label>
                    <br />
                    <input
                      type="text"
                      name="Tax Id"
                      id="tax_id"
                      placeholder="Tax ID or SSN"
                      className="bg-white my-2 p-3 w-full"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>

              <div
                id="locale"
                className="bg-cubblue border-2 border-cubred shadow-lg rounded-xl flex flex-wrap gap-x-2 p-3 w-full lg:w-1/2 xl:w-1/2 mt-2 lg:mt-0 lg:flex-auto"
              >
                <div className="flex flex-col w-full sm:w-2/3">
                  <label htmlFor="remittance_address" className="text-white">
                    Remittance Street Address or P.O. Box
                  </label>
                  <input
                    type="text"
                    name="remittance_address"
                    id="remittance_address"
                    placeholder="Street Address or P.O. Box"
                    className="bg-white my-2 p-3"
                    defaultValue=""
                  />
                </div>

                <div className="flex flex-col w-2/3 sm:w-1/4 flex-auto">
                  <label htmlFor="city" className="text-white">
                    City
                  </label>
                  <input
                    type="text"
                    name="City"
                    id="city"
                    placeholder="City"
                    className="bg-white my-2 p-3"
                    defaultValue=""
                  />
                </div>

                <div className="flex flex-col w-1/4 sm:w-1/3 flex-auto">
                  <label htmlFor="state" className="text-white">
                    State
                  </label>
                  <input
                    type="text"
                    name="State"
                    id="state"
                    placeholder="State"
                    className="bg-white my-2 p-3"
                    defaultValue=""
                  />
                </div>

                <div className="flex flex-col w-2/4 sm:w-1/3">
                  <label htmlFor="zipcode" className="text-white">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    placeholder="Zip Code"
                    className="bg-white my-2 p-3"
                    defaultValue=""
                  />
                </div>

                <div className="flex flex-col w-1/4 flex-auto">
                  <label htmlFor="country" className="text-white">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Country"
                    className="bg-white my-2 p-3"
                    defaultValue=""
                  />
                </div>

                <div className="flex flex-col w-2/4 flex-auto">
                  <label htmlFor="remittance_email" className="text-white">
                    Remittance Email
                  </label>
                  <input
                    type="email"
                    name="remittance_email"
                    id="remittance_email"
                    placeholder="Remittance Email"
                    className="bg-white my-2 p-3 w-full"
                    defaultValue=""
                  />
                </div>
              </div>
            </div>

            <p className="my-2">
              Except in limited situations, the Company*** is not eligible for
              any state sales tax exemptions, and as such, expects its vendors
              and suppliers to charge it the appropriate local sales tax on
              taxable transactions. The Company expects sales tax to be
              collected based on where the goods are shipped. In addition, the
              Company expects its vendors and suppliers to charge it any other
              applicable local taxes; i.e. lease tax. Please confirm that you
              are able to collect the appropriate taxes from the Company under
              the applicable jurisdiction's tax rules. If you are unable to
              collect the appropriate taxes, please let us know so we can set up
              our processes to report the required taxes.
            </p>

            <p className="font-bold my-2">
              The above-named vendor is able to, and will, charge appropriate
              local and state sales and other taxes on its invoices:
            </p>

            <div className="flex flex-col w-full gap-x-2 gap-y-2 lg:flex-row">
              <div
                id="business_info"
                className="rounded-xl bg-cubblue border-2 shadow-lg border-cubred p-3 sm:flex sm:flex-wrap sm:gap-2 lg:gap-0 lg:gap-x-2 lg:w-1/2"
              >
                <div className="flex flex-col w-full sm:w-2/3 lg:w-full">
                  <label htmlFor="service_provided" className="text-white">
                    Service Provided
                  </label>
                  <input
                    type="text"
                    name="service_provided"
                    id="service_provided"
                    placeholder="Service Provided"
                    className="bg-white my-2 p-3"
                    defaultValue=""
                  />
                </div>

                <div className="flex flex-col w-full sm:w-1/4 lg:w-2/4 sm:flex-auto lg:flex-none">
                  <label
                    htmlFor="minority_ownership"
                    className="text-white sm:w-full"
                  >
                    Minority Ownership
                  </label>
                  <select
                    name="minority_ownership"
                    id="minority_ownership"
                    className="bg-white my-2 w-1/4 sm:w-3/6 p-3 h-12"
                    defaultValue=""
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div className="flex flex-col w-full sm:w-1/2 md:w-1/2">
                  <label htmlFor="authorized_name" className="text-white">
                    Authorized Name
                  </label>
                  <input
                    type="text"
                    name="authorized_name"
                    id="authorized_name"
                    placeholder="Authorized Name"
                    className="bg-white my-2 p-3"
                    defaultValue=""
                  />
                </div>

                <div className="flex flex-col w-full sm:w-1/3 sm:flex-auto md:w-1/3">
                  <label
                    htmlFor="authorized_phone_number"
                    className="text-white"
                  >
                    Authorized Phone Number
                  </label>
                  <input
                    type="text"
                    name="authorized_phone_number"
                    id="authorized_phone_number"
                    placeholder="Authorized Phone Number"
                    className="bg-white w-full my-2 p-3"
                    defaultValue=""
                  />
                </div>

                <div className="flex flex-col w-full sm:h-64">
                  <label htmlFor="authorized_signature" className="text-white">
                    Authorized Signature
                  </label>
                  <canvas
                    id="signature-pad"
                    className="border bg-white my-2 sm:w-full sm:h-3/4"
                  ></canvas>
                  <button
                    type="button"
                    id="clearSignature"
                    className="bg-cubred rounded px-2 sm:w-1/3 lg:w-1/3 text-white"
                  >
                    Clear Signature
                  </button>
                  <input
                    type="hidden"
                    name="authorized_signature"
                    id="authorized_signature"
                  />
                </div>
              </div>

              <div
                id="bank_info"
                className="bg-cubblue shadow-lg border-2 rounded-xl border-cubred p-3 sm:flex sm:flex-wrap sm:gap-x-2 lg:w-1/2 lg:h-2/3 lg:flex lg:flex-col xl:flex-auto"
              >
                <div className="flex flex-col w-full lg:w-full">
                  <label htmlFor="bank_name" className="text-white">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    name="bank_name"
                    id="bank_name"
                    placeholder="Bank Name"
                    className="bg-white my-2 p-3"
                    defaultValue=""
                  />
                </div>

                <div className="flex flex-col w-full sm:w-6/12 lg:w-full">
                  <label htmlFor="account_number" className="text-white">
                    Account Number
                  </label>
                  <input
                    type="number"
                    name="account_number"
                    id="account_number"
                    placeholder="Account Number"
                    className="bg-white my-2 p-3 w-full sm:w-full"
                    defaultValue=""
                  />
                </div>

                <div className="flex flex-col w-full sm:w-3/12 lg:w-full flex-auto">
                  <label htmlFor="routing_number" className="text-white">
                    Routing Number
                  </label>
                  <input
                    type="text"
                    name="routing_number"
                    id="routing_number"
                    placeholder="Routing Number"
                    className="bg-white my-2 p-3"
                    defaultValue=""
                  />
                </div>
              </div>
            </div>

            <div className="py-2 signup">
              <button
                type="submit"
                id="newVendorSubmit"
                className="hover:bg-cubred bg-cubblue border-cubred border-2 text-white px-4 py-3 rounded-xl font-medium w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default vendorSignup;
