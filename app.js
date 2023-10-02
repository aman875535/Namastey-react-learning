import React from "react";
import ReactDOM from "react-dom/client";

/* *Header
 *Logo
 * Nav Items
 * Body
 * Search
 *RestaurantContainerss
 - RestaurantCard
    - img
    - names of restau
    - rating
    -cuisines
    - delivery time

 * Footer
 * Copyright
 *- Links
 * .-.Address
 * Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCards =()=>{
return (
  <div className="resto-cards">
    <img class="res-img" alt="res-img" src ="https://www.realsimple.com/thmb/2ixrIIlE-44L1MypGHIs2TqIQYk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-recipes-1672e2b4f9104ed3b3867a2a14889ce9.jpg"/>
<h3>Your Taste</h3>
<h4>Dont Know</h4>
<h4>4.2 star</h4>

  </div>
)
}
const Body = ()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-conatiner">
        {/* restaurant cards */}
        <RestaurantCards />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return <div className="app">
    {/* Header componet */}
    <Header />
     {/* Body componet */}
     <Body />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
