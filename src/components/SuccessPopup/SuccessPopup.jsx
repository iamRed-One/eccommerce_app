/* eslint-disable react/prop-types */

import "./SuccessPopup.css";

const SuccessPopup = ({ visible }) => {
  return (
    <>
      {visible && (
        <div className="success-popup">
          <p>Item Added Successfully ✨</p>
        </div>
      )}
    </>
  );
};

export default SuccessPopup;
