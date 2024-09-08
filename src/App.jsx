// import { Route, Router, Routes } from "react-router-dom"
import { useEffect, useState } from "react";
import ItemDisplay from "./components/ItemDisplay/ItemDisplay";
import LightBox from "./components/LightBox/LightBox";
import Navbar from "./components/Navbar/Navbar";
import SuccessPopup from "./components/SuccessPopup/SuccessPopup";

const App = () => {
  const [showLightBox, setShowLightBox] = useState(false);
  const [showCartItem, setShowCartItem] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [price] = useState(125);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, [visible]);

  return (
    <div className="app">
      <SuccessPopup visible={visible} setVisible={setVisible} />
      {showLightBox && <LightBox setShowLightBox={setShowLightBox} />}
      <Navbar
        quantity={quantity}
        setQuantity={setQuantity}
        price={price}
        showCartItem={showCartItem}
        setShowCartItem={setShowCartItem}
      />
      <ItemDisplay
        quantity={quantity}
        setQuantity={setQuantity}
        price={price}
        showLightBox={showLightBox}
        setShowLightBox={setShowLightBox}
        setShowCartItem={setShowCartItem}
        setVisible={setVisible}
      />
    </div>
  );
};

export default App;
