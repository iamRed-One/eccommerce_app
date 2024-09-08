/* eslint-disable react/prop-types */
import { assets } from "../../assets/assets";
import "./CartDropdown.css";

const CartDropdown = ({ quantity, price, showCartItem, setShowCartItem }) => {
  return (
    <div className="cart-dropdown">
      <h3 className="title">Cart</h3>
      {showCartItem ? (
        <>
          <div className="cart-item">
            <img src={assets.img_product1thumb} alt="" className="item-img" />
            <div className="cart-info">
              <p className="cart-item-desc">Fall Limited edition sneakers</p>
              <p className="cart-item-price">
                ${price}.00 x {quantity} <b>${price * quantity}.00</b>
              </p>
            </div>
            <img
              src={assets.icon_delete}
              alt=""
              className="delete-item-img"
              onClick={() => setShowCartItem(false)}
            />
          </div>
          <div className="cart-btn">
            <button>Checkout</button>
          </div>
        </>
      ) : (
        <p className="no-item">You havent added any item</p>
      )}
    </div>
  );
};

export default CartDropdown;
