import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
import { useStateValue } from "../../StateProvider";
function Checkout() {
  const [{ basket, currentUser }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg"
          className="checkout__ad"
          alt=""
        />
        <div>
          <h3>Hello, {currentUser?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <FlipMove
              easing="ease-in-out"
              duration={200}
              staggerDurationBy={20}
              delay={4000}
            >
              <div key={item.id}>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            </FlipMove>
          ))}
          <FlipMove
            easing="ease-in-out"
            duration={200}
            staggerDurationBy={20}
            delay={4000}
          >
            <div key="a">Hello</div>
            <div key="b">Worlds</div>
            <div key="c">Hello</div>
            <div key="d">Worlds</div>
            <div key="e">Hello</div>
            <div key="f">Worlds</div>
            <div key="g">Hello</div>
            <div key="h">Worlds</div>
            <div key="i">Hello</div>
            <div key="j">World</div>
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
