import React from "react";
import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import Search from "@material-ui/icons/Search"
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_logo_container">
        <img
          className="header_logo"
          src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
          alt=""
        />
      </div>
      <div className="input_container">
        <input className="input" placeholder="Search a date" />
        <Search className="search_icon" color="disabled" />
      </div>
      <div className="header_icon_container">
        <IconButton>
          <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>

        <IconButton>
          <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
