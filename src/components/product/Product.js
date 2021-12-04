import React from "react";
import "./product.css";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img className="product__image" alt="" src={image} />
      <button style={{ cursor: "pointer" }} onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
