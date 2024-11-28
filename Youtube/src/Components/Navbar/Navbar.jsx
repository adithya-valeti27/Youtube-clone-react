import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/youtube-logo.png";
import search from "../../assets/search-icon.png";
import mic from "../../assets/mic.jpeg";
import create from "../../assets/create-icon.png";
import bell from "../../assets/bell.png";
import user from "../../assets/user-icon.jpg";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar, searchYoutube }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    searchYoutube(query);
  };

  const keyClick = (e) => {
    searchYoutube(query);
  };

  const sidebar_toggle = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={menu_icon}
          alt="menu"
          className="menu-icon"
          onClick={sidebar_toggle}
        />
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
            onClick={keyClick}
          />
          <img src={search} alt="search" onClick={handleSearchClick} />
        </div>
        <img src={mic} className="mic" alt="mic" />
      </div>
      <div className="nav-right flex-div">
        <img src={create} alt="create" />
        <img src={bell} alt="bell" />
        <img src={user} alt="user" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
