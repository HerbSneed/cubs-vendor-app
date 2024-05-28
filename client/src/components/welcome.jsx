const welcome = ({ onNewVendorClick }) => {
  return (
    <div>
      <p>Welcome to the Cubs Vendor Sign up app!</p>
      <button onClick={onNewVendorClick}>New Vendor</button>
      <button>Existing Vendor</button>
    </div>
  );
};

export default welcome;
