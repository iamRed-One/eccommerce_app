/* eslint-disable react/prop-types */
import { useState } from "react";
import { productImages, productImagesThumbNails } from "../../assets/assets";
import "./LightBox.css";

const LightBox = ({ setShowLightBox }) => {
  const [itemImg, setItemImg] = useState(0);
  return (
    <div className="light-box">
      <div className="light-box-container">
        <div className="close-light-box" onClick={() => setShowLightBox(false)}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
        </div>

        <div
          className="arrow-icons prev"
          onClick={() => setItemImg((prev) => (prev !== 0 ? prev - 1 : prev))}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>

        <div className="item-display-left">
          <img src={productImages[itemImg]} alt="" />
          <div className="display-thumbnails">
            {productImagesThumbNails.map((thumbNail, index) => {
              return (
                <picture
                  key={index}
                  className={itemImg === index ? "active" : ""}
                  onClick={() => setItemImg(index)}>
                  <img src={thumbNail} className="active" alt="" />
                </picture>
              );
            })}
          </div>
        </div>
        <div
          className="arrow-icons next"
          onClick={() =>
            setItemImg((prev) =>
              prev !== productImages.length - 1 ? prev + 1 : (prev = 0)
            )
          }>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
