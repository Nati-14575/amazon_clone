import React from "react";
import Product from "../product/Product";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61Q6BYGdNxL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="Product one"
            price={12.4}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          <Product
            id={2}
            title="Product two"
            price={12}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Product three"
            price={14}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          <Product
            id={4}
            title="Product four"
            price={15}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
          <Product
            id={5}
            title="Product five"
            price={18}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Product six"
            price={12}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
