import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="..."
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean Startup: How Constant Innovation Creates Radically Successful Busineesses Paperback"
            price={28.45}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="KenWood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={279.98}
            rating={4}
            image="https://dam.kenwoodworld.com/562x468/assets/144447"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Sansung LC49RG90SSUXEN 49' Curved LED Garming Monitor"
            price={199.99}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GBpq37fxrGkw4LaOi_sKQvPo0I2LQDlaGw&usqp=CAU"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6347/6347261cv11d.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-12-wifi-spacegray-2019_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1581985544101"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://media.s-bol.com/AmZKMzD54Oql/1200x500.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
