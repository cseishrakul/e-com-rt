import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="nav-logo">
          <img src={logo} />
          <p>Evaly</p>
        </div>
      </Link>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none", color: "#626262" }}>
            {" "}
            Men{" "}
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            to="/womens"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            Women{" "}
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none", color: "#626262" }}>
            {" "}
            Kids{" "}
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}{" "}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none", color: "#626262" }}>
          {" "}
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} />{" "}
        </Link>
        <div className="nav-cart-count"> {getTotalCartItem()} </div>
      </div>
    </div>
  );
};

export default Navbar;
