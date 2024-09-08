/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  assets,
  productImages,
  productImagesThumbNails,
} from "../../assets/assets";
import "./ItemDisplay.css";

const ItemDisplay = ({
  setShowLightBox,
  quantity,
  setQuantity,
  price,
  setShowCartItem,
  setVisible,
}) => {
  const [itemImg, setItemImg] = useState(0);

  function handleAddToCart() {
    setShowCartItem(true);
    setVisible(true);
  }

  return (
    <div className="item-display">
      <div className="item-display-left">
        <img
          src={assets.icon_prev}
          alt=""
          className="arrow-icons prev"
          onClick={() => setItemImg((prev) => (prev !== 0 ? prev - 1 : prev))}
        />
        <img
          src={productImages[itemImg]}
          alt=""
          onClick={() => setShowLightBox(true)}
        />
        <div className="display-thumbnails">
          {productImagesThumbNails.map((thumbNail, index) => {
            return (
              <picture
                key={index}
                className={itemImg === index ? "active" : ""}
                onClick={() => setItemImg(index)}>
                <img src={thumbNail} alt="" />
              </picture>
            );
          })}
        </div>
        <img
          src={assets.icon_next}
          alt=""
          className="arrow-icons next"
          onClick={() =>
            setItemImg((prev) =>
              prev !== productImages.length - 1 ? prev + 1 : (prev = 0)
            )
          }
        />
      </div>
      <div className="item-display-right">
        <div className="item-info">
          <p style={{ textTransform: "uppercase" }}>Sneaker company</p>
          <h2>Fall limited edition sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <p className="item-price">
            ${price}.00 <span className="item-discount-badge">50%</span>
          </p>
          <span className="item-discount-price">${price * 2}.00</span>
        </div>

        <div className="add-to-cart-container">
          <div className="btn-group">
            <img
              src={assets.icon_minus}
              alt=""
              onClick={() =>
                setQuantity((prev) => (prev !== 0 ? prev - 1 : prev))
              }
            />
            <p className="item-quantity">{quantity}</p>
            <img
              src={assets.icon_plus}
              alt=""
              onClick={() => setQuantity((prev) => prev + 1)}
            />
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <img src={assets.icon_cart} alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDisplay;
